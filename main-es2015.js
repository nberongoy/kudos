(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nielberongoy/Source/kudos-webapp/src/main.ts */"zUnb");


/***/ }),

/***/ "6g7h":
/*!****************************************************!*\
  !*** ./src/app/common/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: KudosSessionService, SessionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosSessionService", function() { return KudosSessionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return SessionProvider; });
/* harmony import */ var _models_session_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/session.model */ "jqPS");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "YJXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-client.service */ "UtPv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class KudosSessionService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.session = null;
        this.isRefreshStarted = false;
    }
    get AccessToken() {
        return this.session ? this.session.accessToken : '';
    }
    set AccessToken(value) {
        this.session.accessToken = value;
    }
    get RefreshToken() {
        return String(localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"].refreshToken));
    }
    set RefreshToken(value) {
        localStorage.setItem(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"].refreshToken, value);
    }
    get ExpiresIn() {
        return this.session ? this.session.expiresIn : null;
    }
    set ExpiresIn(value) {
        this.session.expiresIn = value;
    }
    removeToken() {
        localStorage.removeItem(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"].refreshToken);
    }
    createNewSession() {
        this.session = new _models_session_model__WEBPACK_IMPORTED_MODULE_0__["Session"]();
    }
    clearSession() {
        this.session = null;
    }
    sessionExists() {
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
    load() {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}
KudosSessionService.ɵfac = function KudosSessionService_Factory(t) { return new (t || KudosSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_client_service__WEBPACK_IMPORTED_MODULE_3__["KudosHttpClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
KudosSessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: KudosSessionService, factory: KudosSessionService.ɵfac, providedIn: 'root' });
function SessionProvider(provider) {
    return () => provider.load();
}


/***/ }),

/***/ "7/2B":
/*!*******************************************************!*\
  !*** ./src/app/common/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.service */ "6g7h");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    canActivate() {
        if (this.sessionService.sessionExists()) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_1__["KudosSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    appSettings: {
        apiUrl: "",
        gapUrl: "",
    },
    passwordRequirements: {
        passwordRequiredLength: 6,
        passwordRequireDigit: false,
        passwordRequireLowercase: false,
        passwordRequireUppercase: false,
    },
};


/***/ }),

/***/ "EH5H":
/*!***********************************************!*\
  !*** ./src/app/third-party-imports.module.ts ***!
  \***********************************************/
/*! exports provided: KudosThirdPartyImportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosThirdPartyImportsModule", function() { return KudosThirdPartyImportsModule; });
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class KudosThirdPartyImportsModule {
}
KudosThirdPartyImportsModule.ɵfac = function KudosThirdPartyImportsModule_Factory(t) { return new (t || KudosThirdPartyImportsModule)(); };
KudosThirdPartyImportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: KudosThirdPartyImportsModule });
KudosThirdPartyImportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [[
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"],
            ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"],
            ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"],
        ], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](KudosThirdPartyImportsModule, { imports: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]], exports: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/constants/constants */ "YJXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle(_common_constants_constants__WEBPACK_IMPORTED_MODULE_0__["TITLE"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "UtPv":
/*!********************************************************!*\
  !*** ./src/app/common/services/http-client.service.ts ***!
  \********************************************************/
/*! exports provided: KudosHttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosHttpClientService", function() { return KudosHttpClientService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/request-data.model */ "fIuW");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "YJXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.service */ "j7Ny");






class KudosHttpClientService {
    constructor(httpClient, showHideLoader) {
        this.httpClient = httpClient;
        this.showHideLoader = showHideLoader;
    }
    createUrl(url, localRequest = true) {
        return localRequest ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appSettings.apiUrl + url : url;
    }
    get(url, options, requestData) {
        if (requestData === null || requestData === undefined) {
            requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
        }
        this.handleInterception(options, requestData);
        return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.get(this.createUrl(url, requestData.localRequest), options), requestData);
    }
    post(url, body, options, requestData) {
        if (requestData === null || requestData === undefined) {
            requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
        }
        this.handleInterception(options, requestData);
        return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.post(this.createUrl(url, requestData.localRequest), body, options), requestData);
    }
    put(url, body, options, requestData) {
        if (requestData === null || requestData === undefined) {
            requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
        }
        this.handleInterception(options, requestData);
        return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.put(this.createUrl(url, requestData.localRequest), body, options), requestData);
    }
    delete(url, options, requestData) {
        if (requestData === null || requestData === undefined) {
            requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
        }
        this.handleInterception(options, requestData);
        return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.delete(this.createUrl(url, requestData.localRequest), options), requestData);
    }
    handleInterception(options, requestData) {
        if (!options) {
            if (!(requestData === null || requestData === void 0 ? void 0 : requestData.intercept)) {
                options = {
                    params: { [_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"]]: _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"] },
                };
            }
        }
        else {
            if (!(requestData === null || requestData === void 0 ? void 0 : requestData.intercept)) {
                if (options.params) {
                    Object.assign(options.params, {
                        [_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"]]: _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"],
                    });
                }
                else {
                    options.params = { [_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"]]: _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"] };
                }
            }
        }
    }
}
KudosHttpClientService.ɵfac = function KudosHttpClientService_Factory(t) { return new (t || KudosHttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_5__["KudosShowHideLoaderService"])); };
KudosHttpClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: KudosHttpClientService, factory: KudosHttpClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YJXT":
/*!***********************************************!*\
  !*** ./src/app/common/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: KudosRegex, DefaultHttpOptions, DialogResponse, TWO_FACTOR_AUTH, NO_INTERCEPT_HTTP_KEY, NO_INTERCEPT_HTTP_VALUE, Dialogs, LOCAL_STORAGE, TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosRegex", function() { return KudosRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpOptions", function() { return DefaultHttpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogResponse", function() { return DialogResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_FACTOR_AUTH", function() { return TWO_FACTOR_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_INTERCEPT_HTTP_KEY", function() { return NO_INTERCEPT_HTTP_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_INTERCEPT_HTTP_VALUE", function() { return NO_INTERCEPT_HTTP_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return Dialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function() { return LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE", function() { return TITLE; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

class KudosRegex {
}
KudosRegex.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const DefaultHttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
    withCredentials: false,
};
var DialogResponse;
(function (DialogResponse) {
    DialogResponse[DialogResponse["Cancel"] = 0] = "Cancel";
    DialogResponse[DialogResponse["Accept"] = 1] = "Accept";
})(DialogResponse || (DialogResponse = {}));
const TWO_FACTOR_AUTH = 'User 2FA Enabled';
const NO_INTERCEPT_HTTP_KEY = 'KudosInterceptRequest';
const NO_INTERCEPT_HTTP_VALUE = 'true';
class Dialogs {
}
Dialogs.ADD_DIALOG = 'AddDialog';
const LOCAL_STORAGE = {
    refreshToken: 'refreshToken',
};
const TITLE = 'Kudos Trucking Coorporation';


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _third_party_imports_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./third-party-imports.module */ "EH5H");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/services/http-interceptor.service */ "aWL4");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"] },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionProvider"],
            deps: [_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["KudosSessionService"]],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _common_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["KudosHttpInterceptorService"],
            multi: true,
        },
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _third_party_imports_module__WEBPACK_IMPORTED_MODULE_10__["KudosThirdPartyImportsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _third_party_imports_module__WEBPACK_IMPORTED_MODULE_10__["KudosThirdPartyImportsModule"]] }); })();


/***/ }),

/***/ "aWL4":
/*!*************************************************************!*\
  !*** ./src/app/common/services/http-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: KudosHttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosHttpInterceptorService", function() { return KudosHttpInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "YJXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.service */ "6g7h");






class KudosHttpInterceptorService {
    constructor(router, session) {
        this.router = router;
        this.session = session;
    }
    intercept(req, next) {
        if (!this.session.sessionExists()) {
            return next.handle(req.clone());
        }
        if (req.params.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"]) !== _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"]) {
            let headers = req.headers.set('Authorization', `Bearer ${this.session.AccessToken}`);
            return next.handle(req.clone({ headers: headers })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((succ) => {
                if (succ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"])
                    return succ;
                return;
            }, (err) => {
                var _a;
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"])
                    if (err.status === 401 && ((_a = err.url) === null || _a === void 0 ? void 0 : _a.indexOf('login')) === -1) {
                        this.session.clearSession();
                        this.router.navigate(['login']);
                    }
            }));
        }
        else {
            return next.handle(req.clone({
                params: req.params.delete(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"]),
            }));
        }
    }
}
KudosHttpInterceptorService.ɵfac = function KudosHttpInterceptorService_Factory(t) { return new (t || KudosHttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_5__["KudosSessionService"])); };
KudosHttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: KudosHttpInterceptorService, factory: KudosHttpInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fIuW":
/*!*****************************************************!*\
  !*** ./src/app/common/models/request-data.model.ts ***!
  \*****************************************************/
/*! exports provided: RequestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestData", function() { return RequestData; });
class RequestData {
    constructor(showLoader = false, localRequest = true, intercept = true) {
        this.showLoader = showLoader;
        this.localRequest = localRequest;
        this.intercept = intercept;
    }
}


/***/ }),

/***/ "j7Ny":
/*!***************************************************!*\
  !*** ./src/app/common/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: KudosLoaderService, KudosShowHideLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosLoaderService", function() { return KudosLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosShowHideLoaderService", function() { return KudosShowHideLoaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class KudosLoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
        this.counter = 0;
    }
    show() {
        ++this.counter;
        this.loaderSubject.next({ show: true });
    }
    hide() {
        --this.counter;
        if (this.counter < 0) {
            this.counter = 0;
        }
        if (this.counter === 0) {
            this.loaderSubject.next({ show: false });
        }
    }
}
KudosLoaderService.ɵfac = function KudosLoaderService_Factory(t) { return new (t || KudosLoaderService)(); };
KudosLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: KudosLoaderService, factory: KudosLoaderService.ɵfac, providedIn: 'root' });
class KudosShowHideLoaderService {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    showLoaderAndHideOnCompletion(observable, requestData) {
        if (requestData.showLoader) {
            this.loaderService.show();
        }
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            if (requestData.showLoader) {
                this.loaderService.hide();
            }
        }));
    }
}
KudosShowHideLoaderService.ɵfac = function KudosShowHideLoaderService_Factory(t) { return new (t || KudosShowHideLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](KudosLoaderService)); };
KudosShowHideLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: KudosShowHideLoaderService, factory: KudosShowHideLoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jqPS":
/*!************************************************!*\
  !*** ./src/app/common/models/session.model.ts ***!
  \************************************************/
/*! exports provided: Session, UserConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfiguration", function() { return UserConfiguration; });
class Session {
    constructor() {
        this.accessToken = '';
        this.expiresIn = 0;
    }
}
class UserConfiguration {
    constructor() {
        this.id = '';
        this.userName = '';
        this.fullName = '';
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/services/auth-guard.service */ "7/2B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | mainApp-login-login-module */[__webpack_require__.e("default~mainApp-home-home-module~mainApp-login-login-module"), __webpack_require__.e("mainApp-login-login-module")]).then(__webpack_require__.bind(null, /*! ./mainApp/login/login.module */ "1Lq6")).then((m) => m.LoginModule),
    },
    {
        path: 'home',
        canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        loadChildren: () => Promise.all(/*! import() | mainApp-home-home-module */[__webpack_require__.e("default~mainApp-home-home-module~mainApp-login-login-module"), __webpack_require__.e("mainApp-home-home-module")]).then(__webpack_require__.bind(null, /*! ./mainApp/home/home.module */ "JH0J")).then((m) => m.HomeModule),
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map