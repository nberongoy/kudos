import { HttpHeaders } from '@angular/common/http';

export class KudosRegex {
  static emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

export const DefaultHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: false,
};

export enum DialogResponse {
  Cancel,
  Accept,
}

export const TWO_FACTOR_AUTH: string = 'User 2FA Enabled';
export const NO_INTERCEPT_HTTP_KEY: string = 'KudosInterceptRequest';
export const NO_INTERCEPT_HTTP_VALUE: string = 'true';

export class Dialogs {
  static ADD_DIALOG = 'AddDialog';
}

export const LOCAL_STORAGE = {
  refreshToken: 'refreshToken',
};
