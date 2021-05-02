(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/nielberongoy/Source/kudos-webapp/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6g7h":
    /*!****************************************************!*\
      !*** ./src/app/common/services/session.service.ts ***!
      \****************************************************/

    /*! exports provided: KudosSessionService, SessionProvider */

    /***/
    function g7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosSessionService", function () {
        return KudosSessionService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionProvider", function () {
        return SessionProvider;
      });
      /* harmony import */


      var _models_session_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/session.model */
      "jqPS");
      /* harmony import */


      var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../constants/constants */
      "YJXT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./http-client.service */
      "UtPv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var KudosSessionService = /*#__PURE__*/function () {
        function KudosSessionService(httpClient, router) {
          _classCallCheck(this, KudosSessionService);

          this.httpClient = httpClient;
          this.router = router;
          this.session = null;
          this.isRefreshStarted = false;
        }

        _createClass(KudosSessionService, [{
          key: "AccessToken",
          get: function get() {
            return this.session ? this.session.accessToken : '';
          },
          set: function set(value) {
            this.session.accessToken = value;
          }
        }, {
          key: "RefreshToken",
          get: function get() {
            return String(localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"].refreshToken));
          },
          set: function set(value) {
            localStorage.setItem(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"].refreshToken, value);
          }
        }, {
          key: "ExpiresIn",
          get: function get() {
            return this.session ? this.session.expiresIn : null;
          },
          set: function set(value) {
            this.session.expiresIn = value;
          }
        }, {
          key: "removeToken",
          value: function removeToken() {
            localStorage.removeItem(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"].refreshToken);
          }
        }, {
          key: "createNewSession",
          value: function createNewSession() {
            this.session = new _models_session_model__WEBPACK_IMPORTED_MODULE_0__["Session"]();
          }
        }, {
          key: "clearSession",
          value: function clearSession() {
            this.session = null;
          }
        }, {
          key: "sessionExists",
          value: function sessionExists() {
            return this.session !== null;
          } // startSilentRefresh() {
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

        }, {
          key: "load",
          value: function load() {
            return new Promise(function (resolve, reject) {
              resolve(true);
            });
          }
        }]);

        return KudosSessionService;
      }();

      KudosSessionService.ɵfac = function KudosSessionService_Factory(t) {
        return new (t || KudosSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_client_service__WEBPACK_IMPORTED_MODULE_3__["KudosHttpClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      KudosSessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: KudosSessionService,
        factory: KudosSessionService.ɵfac,
        providedIn: 'root'
      });

      function SessionProvider(provider) {
        return function () {
          return provider.load();
        };
      }
      /***/

    },

    /***/
    "7/2B":
    /*!*******************************************************!*\
      !*** ./src/app/common/services/auth-guard.service.ts ***!
      \*******************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./session.service */
      "6g7h");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(sessionService, router) {
          _classCallCheck(this, AuthGuardService);

          this.sessionService = sessionService;
          this.router = router;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.sessionService.sessionExists()) {
              return true;
            }

            this.router.navigate(["login"]);
            return false;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_1__["KudosSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        appSettings: {
          apiUrl: "",
          gapUrl: ""
        },
        passwordRequirements: {
          passwordRequiredLength: 6,
          passwordRequireDigit: false,
          passwordRequireLowercase: false,
          passwordRequireUppercase: false
        }
      };
      /***/
    },

    /***/
    "EH5H":
    /*!***********************************************!*\
      !*** ./src/app/third-party-imports.module.ts ***!
      \***********************************************/

    /*! exports provided: KudosThirdPartyImportsModule */

    /***/
    function EH5H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosThirdPartyImportsModule", function () {
        return KudosThirdPartyImportsModule;
      });
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/typography */
      "eHCX");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/notification */
      "bNXi");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/time-picker */
      "ix5O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var KudosThirdPartyImportsModule = function KudosThirdPartyImportsModule() {
        _classCallCheck(this, KudosThirdPartyImportsModule);
      };

      KudosThirdPartyImportsModule.ɵfac = function KudosThirdPartyImportsModule_Factory(t) {
        return new (t || KudosThirdPartyImportsModule)();
      };

      KudosThirdPartyImportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: KudosThirdPartyImportsModule
      });
      KudosThirdPartyImportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        imports: [[ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](KudosThirdPartyImportsModule, {
          imports: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]],
          exports: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_1__["NzTypographyModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_17__["NzNotificationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__["NzTimePickerModule"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _common_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common/constants/constants */
      "YJXT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(titleService) {
          _classCallCheck(this, AppComponent);

          this.titleService = titleService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle(_common_constants_constants__WEBPACK_IMPORTED_MODULE_0__["TITLE"]);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UtPv":
    /*!********************************************************!*\
      !*** ./src/app/common/services/http-client.service.ts ***!
      \********************************************************/

    /*! exports provided: KudosHttpClientService */

    /***/
    function UtPv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosHttpClientService", function () {
        return KudosHttpClientService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/request-data.model */
      "fIuW");
      /* harmony import */


      var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constants/constants */
      "YJXT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loader.service */
      "j7Ny");

      var KudosHttpClientService = /*#__PURE__*/function () {
        function KudosHttpClientService(httpClient, showHideLoader) {
          _classCallCheck(this, KudosHttpClientService);

          this.httpClient = httpClient;
          this.showHideLoader = showHideLoader;
        }

        _createClass(KudosHttpClientService, [{
          key: "createUrl",
          value: function createUrl(url) {
            var localRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return localRequest ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appSettings.apiUrl + url : url;
          }
        }, {
          key: "get",
          value: function get(url, options, requestData) {
            if (requestData === null || requestData === undefined) {
              requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
            }

            this.handleInterception(options, requestData);
            return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.get(this.createUrl(url, requestData.localRequest), options), requestData);
          }
        }, {
          key: "post",
          value: function post(url, body, options, requestData) {
            if (requestData === null || requestData === undefined) {
              requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
            }

            this.handleInterception(options, requestData);
            return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.post(this.createUrl(url, requestData.localRequest), body, options), requestData);
          }
        }, {
          key: "put",
          value: function put(url, body, options, requestData) {
            if (requestData === null || requestData === undefined) {
              requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
            }

            this.handleInterception(options, requestData);
            return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient.put(this.createUrl(url, requestData.localRequest), body, options), requestData);
          }
        }, {
          key: "delete",
          value: function _delete(url, options, requestData) {
            if (requestData === null || requestData === undefined) {
              requestData = new _models_request_data_model__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
            }

            this.handleInterception(options, requestData);
            return this.showHideLoader.showLoaderAndHideOnCompletion(this.httpClient["delete"](this.createUrl(url, requestData.localRequest), options), requestData);
          }
        }, {
          key: "handleInterception",
          value: function handleInterception(options, requestData) {
            if (!options) {
              if (!(requestData === null || requestData === void 0 ? void 0 : requestData.intercept)) {
                options = {
                  params: _defineProperty({}, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"], _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"])
                };
              }
            } else {
              if (!(requestData === null || requestData === void 0 ? void 0 : requestData.intercept)) {
                if (options.params) {
                  Object.assign(options.params, _defineProperty({}, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"], _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"]));
                } else {
                  options.params = _defineProperty({}, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"], _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"]);
                }
              }
            }
          }
        }]);

        return KudosHttpClientService;
      }();

      KudosHttpClientService.ɵfac = function KudosHttpClientService_Factory(t) {
        return new (t || KudosHttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_5__["KudosShowHideLoaderService"]));
      };

      KudosHttpClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: KudosHttpClientService,
        factory: KudosHttpClientService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "YJXT":
    /*!***********************************************!*\
      !*** ./src/app/common/constants/constants.ts ***!
      \***********************************************/

    /*! exports provided: KudosRegex, DefaultHttpOptions, DialogResponse, TWO_FACTOR_AUTH, NO_INTERCEPT_HTTP_KEY, NO_INTERCEPT_HTTP_VALUE, Dialogs, LOCAL_STORAGE, TITLE */

    /***/
    function YJXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosRegex", function () {
        return KudosRegex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultHttpOptions", function () {
        return DefaultHttpOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogResponse", function () {
        return DialogResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TWO_FACTOR_AUTH", function () {
        return TWO_FACTOR_AUTH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_INTERCEPT_HTTP_KEY", function () {
        return NO_INTERCEPT_HTTP_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_INTERCEPT_HTTP_VALUE", function () {
        return NO_INTERCEPT_HTTP_VALUE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dialogs", function () {
        return Dialogs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function () {
        return LOCAL_STORAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TITLE", function () {
        return TITLE;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var KudosRegex = function KudosRegex() {
        _classCallCheck(this, KudosRegex);
      };

      KudosRegex.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var DefaultHttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
          'Content-Type': 'application/json'
        }),
        withCredentials: false
      };
      var DialogResponse;

      (function (DialogResponse) {
        DialogResponse[DialogResponse["Cancel"] = 0] = "Cancel";
        DialogResponse[DialogResponse["Accept"] = 1] = "Accept";
      })(DialogResponse || (DialogResponse = {}));

      var TWO_FACTOR_AUTH = 'User 2FA Enabled';
      var NO_INTERCEPT_HTTP_KEY = 'KudosInterceptRequest';
      var NO_INTERCEPT_HTTP_VALUE = 'true';

      var Dialogs = function Dialogs() {
        _classCallCheck(this, Dialogs);
      };

      Dialogs.ADD_DIALOG = 'AddDialog';
      var LOCAL_STORAGE = {
        refreshToken: 'refreshToken'
      };
      var TITLE = 'Kudos Trucking Coorporation';
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "tAZD");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _third_party_imports_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./third-party-imports.module */
      "EH5H");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./common/services/http-interceptor.service */
      "aWL4");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"],
          useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"]
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionProvider"],
          deps: [_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["KudosSessionService"]],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _common_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["KudosHttpInterceptorService"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _third_party_imports_module__WEBPACK_IMPORTED_MODULE_10__["KudosThirdPartyImportsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _third_party_imports_module__WEBPACK_IMPORTED_MODULE_10__["KudosThirdPartyImportsModule"]]
        });
      })();
      /***/

    },

    /***/
    "aWL4":
    /*!*************************************************************!*\
      !*** ./src/app/common/services/http-interceptor.service.ts ***!
      \*************************************************************/

    /*! exports provided: KudosHttpInterceptorService */

    /***/
    function aWL4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosHttpInterceptorService", function () {
        return KudosHttpInterceptorService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constants/constants */
      "YJXT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./session.service */
      "6g7h");

      var KudosHttpInterceptorService = /*#__PURE__*/function () {
        function KudosHttpInterceptorService(router, session) {
          _classCallCheck(this, KudosHttpInterceptorService);

          this.router = router;
          this.session = session;
        }

        _createClass(KudosHttpInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            if (!this.session.sessionExists()) {
              return next.handle(req.clone());
            }

            if (req.params.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"]) !== _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_VALUE"]) {
              var headers = req.headers.set('Authorization', "Bearer ".concat(this.session.AccessToken));
              return next.handle(req.clone({
                headers: headers
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (succ) {
                if (succ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) return succ;
                return;
              }, function (err) {
                var _a;

                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) if (err.status === 401 && ((_a = err.url) === null || _a === void 0 ? void 0 : _a.indexOf('login')) === -1) {
                  _this.session.clearSession();

                  _this.router.navigate(['login']);
                }
              }));
            } else {
              return next.handle(req.clone({
                params: req.params["delete"](_constants_constants__WEBPACK_IMPORTED_MODULE_2__["NO_INTERCEPT_HTTP_KEY"])
              }));
            }
          }
        }]);

        return KudosHttpInterceptorService;
      }();

      KudosHttpInterceptorService.ɵfac = function KudosHttpInterceptorService_Factory(t) {
        return new (t || KudosHttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_5__["KudosSessionService"]));
      };

      KudosHttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: KudosHttpInterceptorService,
        factory: KudosHttpInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "fIuW":
    /*!*****************************************************!*\
      !*** ./src/app/common/models/request-data.model.ts ***!
      \*****************************************************/

    /*! exports provided: RequestData */

    /***/
    function fIuW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestData", function () {
        return RequestData;
      });

      var RequestData = function RequestData() {
        var showLoader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var localRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var intercept = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, RequestData);

        this.showLoader = showLoader;
        this.localRequest = localRequest;
        this.intercept = intercept;
      };
      /***/

    },

    /***/
    "j7Ny":
    /*!***************************************************!*\
      !*** ./src/app/common/services/loader.service.ts ***!
      \***************************************************/

    /*! exports provided: KudosLoaderService, KudosShowHideLoaderService */

    /***/
    function j7Ny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosLoaderService", function () {
        return KudosLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KudosShowHideLoaderService", function () {
        return KudosShowHideLoaderService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var KudosLoaderService = /*#__PURE__*/function () {
        function KudosLoaderService() {
          _classCallCheck(this, KudosLoaderService);

          this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.loaderState = this.loaderSubject.asObservable();
          this.counter = 0;
        }

        _createClass(KudosLoaderService, [{
          key: "show",
          value: function show() {
            ++this.counter;
            this.loaderSubject.next({
              show: true
            });
          }
        }, {
          key: "hide",
          value: function hide() {
            --this.counter;

            if (this.counter < 0) {
              this.counter = 0;
            }

            if (this.counter === 0) {
              this.loaderSubject.next({
                show: false
              });
            }
          }
        }]);

        return KudosLoaderService;
      }();

      KudosLoaderService.ɵfac = function KudosLoaderService_Factory(t) {
        return new (t || KudosLoaderService)();
      };

      KudosLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: KudosLoaderService,
        factory: KudosLoaderService.ɵfac,
        providedIn: 'root'
      });

      var KudosShowHideLoaderService = /*#__PURE__*/function () {
        function KudosShowHideLoaderService(loaderService) {
          _classCallCheck(this, KudosShowHideLoaderService);

          this.loaderService = loaderService;
        }

        _createClass(KudosShowHideLoaderService, [{
          key: "showLoaderAndHideOnCompletion",
          value: function showLoaderAndHideOnCompletion(observable, requestData) {
            var _this2 = this;

            if (requestData.showLoader) {
              this.loaderService.show();
            }

            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              if (requestData.showLoader) {
                _this2.loaderService.hide();
              }
            }));
          }
        }]);

        return KudosShowHideLoaderService;
      }();

      KudosShowHideLoaderService.ɵfac = function KudosShowHideLoaderService_Factory(t) {
        return new (t || KudosShowHideLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](KudosLoaderService));
      };

      KudosShowHideLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: KudosShowHideLoaderService,
        factory: KudosShowHideLoaderService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "jqPS":
    /*!************************************************!*\
      !*** ./src/app/common/models/session.model.ts ***!
      \************************************************/

    /*! exports provided: Session, UserConfiguration */

    /***/
    function jqPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Session", function () {
        return Session;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserConfiguration", function () {
        return UserConfiguration;
      });

      var Session = function Session() {
        _classCallCheck(this, Session);

        this.accessToken = '';
        this.expiresIn = 0;
      };

      var UserConfiguration = function UserConfiguration() {
        _classCallCheck(this, UserConfiguration);

        this.id = '';
        this.userName = '';
        this.fullName = '';
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common/services/auth-guard.service */
      "7/2B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | mainApp-login-login-module */
          [__webpack_require__.e("default~mainApp-home-home-module~mainApp-login-login-module"), __webpack_require__.e("mainApp-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./mainApp/login/login.module */
          "1Lq6")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'home',
        canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | mainApp-home-home-module */
          [__webpack_require__.e("default~mainApp-home-home-module~mainApp-login-login-module"), __webpack_require__.e("mainApp-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./mainApp/home/home.module */
          "JH0J")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'home'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map