import { Injectable } from "@angular/core";
import { interval, Observable, Subject } from "rxjs";
import { Session, UserConfiguration } from "../models/session.model";
import { KudosHttpClientService } from "./http-client.service";
import { Router } from "@angular/router";
import { DefaultHttpOptions } from "../constants/constants";
import { RequestData } from "../models/request-data.model";
import {
  USER_ME,
  REFRESH_TOKEN,
  GET_METADATA_CONFIGURATION,
  GET_ACCOUNT_MANAGER,
} from "../constants/endpoints";
import { map } from "rxjs/operators";
import {
  DocumentTypeConfiguration,
  AccountManager,
  Company,
} from "src/app/models";
import { environment } from "src/environments/environment";
import { KudosThemeService } from "./theme.service";
import { setAppLanguage } from "src/assets/translations";

@Injectable({
  providedIn: "root",
})
export class KudosSessionService {
  private refreshToken: string = "refreshToken";

  private session: Session = null;
  private isRefreshStarted: boolean = false;
  public userConfiguration: UserConfiguration;
  public metadataConfiguration: Array<DocumentTypeConfiguration>;
  public companySelected: Company;
  public accountManager: AccountManager;

  companySelectedChange: Subject<any> = new Subject<any>();

  constructor(
    private httpClient: KudosHttpClientService,
    private themeService: KudosThemeService,
    private router: Router
  ) {}

  get AccessToken(): string {
    return this.session ? this.session.accessToken : "";
  }

  set AccessToken(value: string) {
    this.session.accessToken = value;
  }

  get RefreshToken(): string {
    return localStorage.getItem(this.refreshToken);
  }

  set RefreshToken(value: string) {
    localStorage.setItem(this.refreshToken, value);
  }

  get ExpiresIn(): number {
    return this.session ? this.session.expiresIn : null;
  }

  set ExpiresIn(value: number) {
    this.session.expiresIn = value;
  }

  onChangeCompanySelected(data: any) {
    this.companySelected = data;
    this.companySelectedChange.next(data);
  }

  removeToken(): void {
    localStorage.removeItem(this.refreshToken);
  }

  createNewSession() {
    this.session = new Session();
  }

  clearSession() {
    this.session = null;
  }

  sessionExists(): boolean {
    return this.session !== null;
  }

  startSilentRefresh() {
    if (!this.isRefreshStarted) {
      this.isRefreshStarted = true;
      interval(
        (this.ExpiresIn - 20 > 20 ? this.ExpiresIn - 20 : 20) * 1000
      ).subscribe(() => {
        if (
          !this.RefreshToken ||
          this.RefreshToken == "null" ||
          this.RefreshToken == "undefined"
        ) {
          this.router.navigate(["login"]);
        } else {
          let subscription = this.refreshAccessToken().subscribe((x) => {
            let sessionexists = this.sessionExists();
            if (!sessionexists) this.createNewSession();
            this.AccessToken = x.access_Token;
            this.ExpiresIn = x.expires_In;
            this.RefreshToken = x.refresh_Token;
            subscription.unsubscribe();
          });
        }
      });
    }
  }

  refreshAccessToken(): Observable<any> {
    return this.httpClient
      .post(
        `${environment.appSettings.gapUrl}${REFRESH_TOKEN}`,
        { refreshToken: this.RefreshToken },
        DefaultHttpOptions,
        new RequestData(false, false, false)
      )
      .pipe(
        map((x) => {
          x["expires_In"] = 3600;
          return x;
        })
      );
  }

  getUserConfiguration() {
    let options = {
      headers: {
        Accept: "application/json",
      },
      withCredentials: false,
    };
    return this.httpClient.get(
      `${environment.appSettings.gapUrl}${USER_ME}`,
      options,
      new RequestData(true, false, true)
    );
  }

  getMetadataConfiguration() {
    if (this.userConfiguration) {
      let options = {
        headers: {
          Accept: "application/json",
        },
        withCredentials: false,
      };

      return this.httpClient.get(
        `${environment.appSettings.gapUrl}${GET_METADATA_CONFIGURATION(
          this.userConfiguration.tenant.id
        )}`,
        options,
        new RequestData(true, false, true)
      );
    }
  }

  getAccountManagerConfiguration(companyId: string) {
    if (this.userConfiguration) {
      let options = {
        headers: {
          Accept: "application/json",
        },
        withCredentials: false,
      };

      return this.httpClient.get(
        `${environment.appSettings.gapUrl}${GET_ACCOUNT_MANAGER(companyId)}`,
        options,
        new RequestData(true, false, true)
      );
    }
  }

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (
        this.RefreshToken != null &&
        this.RefreshToken != "null" &&
        this.RefreshToken != "undefined"
      ) {
        this.refreshAccessToken().subscribe(
          (x) => {
            this.createNewSession();
            this.AccessToken = x.access_Token;
            this.ExpiresIn = x.expires_In;
            this.RefreshToken = x.refresh_Token;
            this.startSilentRefresh();
            let configSubscription = this.getUserConfiguration().subscribe(
              (res) => {
                this.userConfiguration = res;
                setAppLanguage(res.language.code);
                this.themeService.changeTheme(res.tenant.colorHex);
                configSubscription.unsubscribe();

                let metadataSubscription = this.getMetadataConfiguration().subscribe(
                  (metadata) => {
                    this.metadataConfiguration = metadata;
                    metadataSubscription.unsubscribe();
                    resolve(true);
                  },
                  (err) => resolve(true)
                );
              },
              (err) => resolve(true)
            );
          },
          (err) => {
            this.clearSession();
            resolve(true);
          }
        );
      } else {
        this.clearSession();
        resolve(true);
      }
    });
  }
}

export function SessionProvider(provider: KudosSessionService) {
  return () => provider.load();
}
