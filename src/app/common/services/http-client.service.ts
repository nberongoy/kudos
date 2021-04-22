import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RequestData } from "../models/request-data.model";
import { KudosShowHideLoaderService } from "./loader.service";
import { IHttpOptions } from "../interfaces/http-options.interface";
import { HttpClient } from "@angular/common/http";
import {
  NO_INTERCEPT_HTTP_KEY,
  NO_INTERCEPT_HTTP_VALUE,
} from "../constants/constants";

@Injectable({
  providedIn: "root",
})
export class KudosHttpClientService {
  constructor(
    private httpClient: HttpClient,
    private showHideLoader: KudosShowHideLoaderService
  ) {}
  private createUrl(url: string, localRequest: boolean = true) {
    return localRequest ? environment.appSettings.apiUrl + url : url;
  }

  get(
    url: string,
    options?: IHttpOptions,
    requestData?: RequestData
  ): Observable<any> {
    if (requestData === null || requestData === undefined) {
      requestData = new RequestData();
    }
    this.handleInterception(options, requestData);
    return this.showHideLoader.showLoaderAndHideOnCompletion(
      this.httpClient.get(
        this.createUrl(url, requestData.localRequest),
        options
      ),
      requestData
    );
  }

  post(
    url: string,
    body: any | null,
    options?: IHttpOptions,
    requestData?: RequestData
  ): Observable<any> {
    if (requestData === null || requestData === undefined) {
      requestData = new RequestData();
    }
    this.handleInterception(options, requestData);

    return this.showHideLoader.showLoaderAndHideOnCompletion(
      this.httpClient.post(
        this.createUrl(url, requestData.localRequest),
        body,
        options
      ),
      requestData
    );
  }

  put(
    url: string,
    body: any | null,
    options?: IHttpOptions,
    requestData?: RequestData
  ): Observable<any> {
    if (requestData === null || requestData === undefined) {
      requestData = new RequestData();
    }
    this.handleInterception(options, requestData);

    return this.showHideLoader.showLoaderAndHideOnCompletion(
      this.httpClient.put(
        this.createUrl(url, requestData.localRequest),
        body,
        options
      ),
      requestData
    );
  }

  delete(
    url: string,
    options?: IHttpOptions,
    requestData?: RequestData
  ): Observable<any> {
    if (requestData === null || requestData === undefined) {
      requestData = new RequestData();
    }
    this.handleInterception(options, requestData);

    return this.showHideLoader.showLoaderAndHideOnCompletion(
      this.httpClient.delete(
        this.createUrl(url, requestData.localRequest),
        options
      ),
      requestData
    );
  }

  private handleInterception(options: IHttpOptions, requestData: RequestData) {
    if (!options) {
      if (!requestData.intercept) {
        options = {
          params: { [NO_INTERCEPT_HTTP_KEY]: NO_INTERCEPT_HTTP_VALUE },
        };
      }
    } else {
      if (!requestData.intercept) {
        if (options.params) {
          Object.assign(options.params, {
            [NO_INTERCEPT_HTTP_KEY]: NO_INTERCEPT_HTTP_VALUE,
          });
        } else {
          options.params = { [NO_INTERCEPT_HTTP_KEY]: NO_INTERCEPT_HTTP_VALUE };
        }
      }
    }
  }
}
