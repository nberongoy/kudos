(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mainApp-login-login-module"],{

/***/ "1Lq6":
/*!***********************************************!*\
  !*** ./src/app/mainApp/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var src_app_common_imports_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common-imports.module */ "XVJ+");
/* harmony import */ var src_app_third_party_imports_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/third-party-imports.module */ "EH5H");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "wPpa");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "Erg+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[src_app_third_party_imports_module__WEBPACK_IMPORTED_MODULE_1__["KudosThirdPartyImportsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], src_app_common_imports_module__WEBPACK_IMPORTED_MODULE_0__["KudosCommonImportsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [src_app_third_party_imports_module__WEBPACK_IMPORTED_MODULE_1__["KudosThirdPartyImportsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], src_app_common_imports_module__WEBPACK_IMPORTED_MODULE_0__["KudosCommonImportsModule"]] }); })();


/***/ }),

/***/ "Erg+":
/*!*******************************************************!*\
  !*** ./src/app/mainApp/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "wPpa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "kz3d":
/*!*******************************************************!*\
  !*** ./src/app/common/services/validators.service.ts ***!
  \*******************************************************/
/*! exports provided: KudosValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosValidatorsService", function() { return KudosValidatorsService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "YJXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class KudosValidatorsService {
    getRequiredFieldValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('required'),
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            isAsync: false,
        };
    }
    getEmailFormatValidator(messageKey) {
        return {
            messageKey,
            check: (control) => control.hasError('pattern'),
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KudosRegex"].emailRegex),
            isAsync: false,
        };
    }
    getNumericFieldValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('pattern'),
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[-+]?(0|[1-9][0-9]*)$'),
            isAsync: false,
        };
    }
    getDecimalValidator(messageKey, decimals = 2) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('pattern'),
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^-?\\d+(\\.\\d{1,{0}})?$'.replace('{0}', decimals.toString())),
            isAsync: false,
        };
    }
    getEmptySpaceValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('emptySpace'),
            validator: (control) => (control.value ? control.value : 0).toString().trim() == ''
                ? {
                    emptySpace: true,
                }
                : {},
            isAsync: false,
        };
    }
    getPositiveNumbersValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('positiveNumbersOnly'),
            validator: (control) => (control.value ? control.value : 0) < 0
                ? {
                    positiveNumbersOnly: true,
                }
                : {},
            isAsync: false,
        };
    }
    getMatchWithOtherControlValidator(messageKey, control) {
        return {
            messageKey: messageKey,
            check: (formControl) => formControl.hasError('fieldsNotMatch'),
            validator: (formControl) => (formControl.value ? formControl.value : '') !== (control.value ? control.value : '')
                ? {
                    fieldsNotMatch: true,
                }
                : {},
            isAsync: false,
        };
    }
    createUniquenessValidator(uniquenessChecker, formControl) {
        return formControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((value) => {
            return uniquenessChecker(value);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((found) => {
            return !found ? null : { isNotUnique: true };
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    getLengthValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('minlength'),
            getMessageInterpolationParams: () => {
                return {
                    0: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].passwordRequirements.passwordRequiredLength.toString(),
                };
            },
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].passwordRequirements.passwordRequiredLength),
            isAsync: false,
        };
    }
    getHasNumberValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('hasDigit'),
            validator: (formControl) => src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].passwordRequirements.passwordRequireDigit
                ? (formControl.value ? formControl.value : '').match(/\d/)
                    ? {}
                    : { hasDigit: true }
                : {},
            isAsync: false,
        };
    }
    getHasCapitalCaseValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('hasCapitalCase'),
            validator: (formControl) => src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].passwordRequirements.passwordRequireUppercase
                ? (formControl.value ? formControl.value : '').match(/[A-Z]/)
                    ? {}
                    : { hasCapitalCase: true }
                : {},
            isAsync: false,
        };
    }
    getHasSmallCaseValidator(messageKey) {
        return {
            messageKey: messageKey,
            check: (control) => control.hasError('hasCapitalLowerCase'),
            validator: (formControl) => src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].passwordRequirements.passwordRequireLowercase
                ? (formControl.value ? formControl.value : '').match(/[a-z]/)
                    ? {}
                    : { hasCapitalLowerCase: true }
                : {},
            isAsync: false,
        };
    }
}
KudosValidatorsService.ɵfac = function KudosValidatorsService_Factory(t) { return new (t || KudosValidatorsService)(); };
KudosValidatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: KudosValidatorsService, factory: KudosValidatorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wPpa":
/*!********************************************************!*\
  !*** ./src/app/mainApp/login/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_common_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/constants/constants */ "YJXT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_common_validators_generic_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/validators/generic-validator */ "pk9M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/validators.service */ "kz3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_http_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/services/http-client.service */ "UtPv");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _common_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/components/button/button.component */ "QcZV");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");





















function LoginComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_ng_template_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.passwordVisible = !ctx_r4.passwordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r1.passwordVisible ? "eye-invisible" : "eye");
} }
function LoginComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 18);
} }
const _c0 = function () { return { "margin-bottom": "5px" }; };
class LoginComponent {
    constructor(validatorService, router, http, sessionService, titleService, formBuilder) {
        this.validatorService = validatorService;
        this.router = router;
        this.http = http;
        this.sessionService = sessionService;
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.errorMessage = null;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.displayMessage = {};
        this.validationMessages = {};
        this.genericValidator = new src_app_common_validators_generic_validator__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"]({});
        this.loginSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.passwordVisible = false;
        this.loading = false;
        this.validationMessages = {
            username: {
                required: 'Username is required.',
                pattern: 'Username is not valid.',
            },
            password: {
                required: 'Password is required.',
            },
        };
        this.genericValidator = new src_app_common_validators_generic_validator__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"](this.validationMessages);
    }
    ngOnInit() {
        this.titleService.setTitle(`Login | ${src_app_common_constants_constants__WEBPACK_IMPORTED_MODULE_0__["TITLE"]}`);
        this.loginForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.loginSubscription = this.loginForm.valueChanges.subscribe(() => {
            this.displayMessage = this.genericValidator.processMessages(this.loginForm);
            this.errorMessage = null;
        });
    }
    ngOnDestroy() {
        this.loginSubscription.unsubscribe();
    }
    gotoForgotPassword() { }
    loginSubmit() {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[i].markAsDirty();
            this.loginForm.controls[i].updateValueAndValidity();
        }
        if (this.loginForm.valid) {
            if (this.loginForm.dirty) {
                this.sessionService.createNewSession();
                this.router.navigate(['home']);
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_common_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["KudosValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_common_services_http_client_service__WEBPACK_IMPORTED_MODULE_7__["KudosHttpClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["KudosSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], inputs: { errorMessage: "errorMessage" }, decls: 32, vars: 12, consts: [[1, "loginContainer"], ["nz-row", ""], [1, "cardContainer"], ["nz-typography", "", 1, "loginHeaderText"], ["nz-form", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], ["nzTip", "Logging in", 3, "nzSpinning", "nzIndicator"], ["nz-text", "", "nzType", "danger", 3, "ngStyle"], [1, "loginLabel"], [3, "nzErrorTip"], ["type", "email", "nz-input", "", "formControlName", "username"], [3, "nzSuffix"], ["nz-input", "", "formControlName", "password", "placeholder", "Password", 3, "type"], ["suffixTemplate", ""], [3, "text", "block"], [1, "forgotPasswordStyle"], [3, "click"], ["indicatorTemplate", ""], ["nz-icon", "", 3, "nzType", "click"], ["nz-icon", "", "nzType", "loading", 1, "login-loading"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.loginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-spin", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nz-input-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, LoginComponent_ng_template_20_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "kudos-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_28_listener() { return ctx.gotoForgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, LoginComponent_ng_template_30_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpinning", ctx.loading)("nzIndicator", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzErrorTip", ctx.displayMessage.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzErrorTip", ctx.displayMessage.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.passwordVisible ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Log In")("block", true);


/***/ })

}]);
//# sourceMappingURL=mainApp-login-login-module-es2015.js.map