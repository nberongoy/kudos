import { Injectable } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { Session, UserConfiguration } from '../models/session.model';
import { KudosHttpClientService } from './http-client.service';
import { Router } from '@angular/router';
import { DefaultHttpOptions, LOCAL_STORAGE } from '../constants/constants';
import { RequestData } from '../models/request-data.model';
// import {} from '../constants/endpoints';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { setAppLanguage } from 'src/assets/translations';

@Injectable({
  providedIn: 'root',
})
export class KudosSessionService {
  private session: Session | any = null;
  private isRefreshStarted: boolean = false;

  constructor(private httpClient: KudosHttpClientService, private router: Router) {}

  get AccessToken(): string {
    return this.session ? this.session.accessToken : '';
  }

  set AccessToken(value: string) {
    this.session.accessToken = value;
  }

  get RefreshToken(): string {
    return String(localStorage.getItem(LOCAL_STORAGE.refreshToken));
  }

  set RefreshToken(value: string) {
    localStorage.setItem(LOCAL_STORAGE.refreshToken, value);
  }

  get ExpiresIn(): number {
    return this.session ? this.session.expiresIn : null;
  }

  set ExpiresIn(value: number) {
    this.session.expiresIn = value;
  }

  removeToken(): void {
    localStorage.removeItem(LOCAL_STORAGE.refreshToken);
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

  // startSilentRefresh() {
  // if (!this.isRefreshStarted) {
  //   this.isRefreshStarted = true;
  //   interval((this.ExpiresIn - 20 > 20 ? this.ExpiresIn - 20 : 20) * 1000).subscribe(() => {
  //     if (!this.RefreshToken || this.RefreshToken == 'null' || this.RefreshToken == 'undefined') {
  //       this.router.navigate(['login']);
  //     } else {
  //       let subscription = this.refreshAccessToken().subscribe((x) => {
  //         let sessionexists = this.sessionExists();
  //         if (!sessionexists) this.createNewSession();
  //         this.AccessToken = x.access_Token;
  //         this.ExpiresIn = x.expires_In;
  //         this.RefreshToken = x.refresh_Token;
  //         subscription.unsubscribe();
  //       });
  //     }
  //   });
  // }
  // }

  // refreshAccessToken(): Observable<any> {
  //   return this.httpClient
  //     .post(
  //       `${environment.appSettings.gapUrl}${REFRESH_TOKEN}`,
  //       { refreshToken: this.RefreshToken },
  //       DefaultHttpOptions,
  //       new RequestData(false, false, false)
  //     )
  //     .pipe(
  //       map((x) => {
  //         x['expires_In'] = 3600;
  //         return x;
  //       })
  //     );
  // }

  // getUserConfiguration() {
  //   let options = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     withCredentials: false,
  //   };
  //   return this.httpClient.get(`${environment.appSettings.gapUrl}${USER_ME}`, options, new RequestData(true, false, true));
  // }

  //   public load(): Promise<any> {
  //     return new Promise((resolve, reject) => {
  //       if (this.RefreshToken != null && this.RefreshToken != 'null' && this.RefreshToken != 'undefined') {
  //         this.refreshAccessToken().subscribe(
  //           (x) => {
  //             this.createNewSession();
  //             this.AccessToken = x.access_Token;
  //             this.ExpiresIn = x.expires_In;
  //             this.RefreshToken = x.refresh_Token;
  //             this.startSilentRefresh();
  //             let configSubscription = this.getUserConfiguration().subscribe(
  //               (res) => {
  //                 this.userConfiguration = res;
  //                 setAppLanguage(res.language.code);
  //                 configSubscription.unsubscribe();

  //                 let metadataSubscription = this.getMetadataConfiguration().subscribe(
  //                   (metadata) => {
  //                     this.metadataConfiguration = metadata;
  //                     metadataSubscription.unsubscribe();
  //                     resolve(true);
  //                   },
  //                   (err) => resolve(true)
  //                 );
  //               },
  //               (err) => resolve(true)
  //             );
  //           },
  //           (err) => {
  //             this.clearSession();
  //             resolve(true);
  //           }
  //         );
  //       } else {
  //         this.clearSession();
  //         resolve(true);
  //       }
  //     });
  //   }

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}

export function SessionProvider(provider: KudosSessionService) {
  return () => provider.load();
}
