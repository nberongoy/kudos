(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mainApp-home-home-module~mainApp-login-login-module"],{

/***/ "QcZV":
/*!**************************************************************!*\
  !*** ./src/app/common/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: KudosButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosButtonComponent", function() { return KudosButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return { kudosButtonStyleBlockOn: a0, kudosButtonStyle: a1 }; };
class KudosButtonComponent {
    constructor() {
        this.textKey = '';
        this.text = '';
        this.styles = {};
        this.disabled = false;
        this.color = 'primary';
        this.showIcon = false;
        this.iconName = '';
        this.disableRipple = false;
        this.buttonText = '';
        this.buttonType = 'primary';
        this.block = false;
        this.onButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.addButtonText();
    }
    click(event) {
        if (!this.disabled) {
            event.currentTarget.blur();
            this.onButtonClick.emit(event);
        }
    }
    ngOnChanges(changes) {
        if (!changes.text.isFirstChange() && changes.text.previousValue !== changes.text.currentValue) {
            this.addButtonText();
        }
    }
    addButtonText() {
        if (this.textKey === undefined && this.text === undefined) {
            throw Error('No button text provided.');
        }
        if (this.text !== undefined) {
            this.buttonText = this.text;
        }
        else {
            this.loadTranslation();
        }
    }
    loadTranslation() {
        //to be implemented with translation service
    }
}
KudosButtonComponent.ɵfac = function KudosButtonComponent_Factory(t) { return new (t || KudosButtonComponent)(); };
KudosButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KudosButtonComponent, selectors: [["kudos-button"]], inputs: { textKey: "textKey", text: "text", styles: "styles", disabled: "disabled", color: "color", showIcon: "showIcon", iconName: "iconName", disableRipple: "disableRipple", buttonType: "buttonType", block: "block" }, outputs: { onButtonClick: "onButtonClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 8, consts: [["nz-button", "", 3, "ngClass", "nzType", "nzBlock", "ngStyle", "click"]], template: function KudosButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KudosButtonComponent_Template_button_click_0_listener($event) { return ctx.click($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.block, !ctx.block))("nzType", ctx.buttonType)("nzBlock", ctx.block)("ngStyle", ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonText, "\n");


/***/ }),

/***/ "XVJ+":
/*!******************************************!*\
  !*** ./src/app/common-imports.module.ts ***!
  \******************************************/
/*! exports provided: KudosCommonImportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KudosCommonImportsModule", function() { return KudosCommonImportsModule; });
/* harmony import */ var _third_party_imports_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-party-imports.module */ "EH5H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/components/button/button.component */ "QcZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class KudosCommonImportsModule {
}
KudosCommonImportsModule.ɵfac = function KudosCommonImportsModule_Factory(t) { return new (t || KudosCommonImportsModule)(); };
KudosCommonImportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KudosCommonImportsModule });
KudosCommonImportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[_third_party_imports_module__WEBPACK_IMPORTED_MODULE_0__["KudosThirdPartyImportsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KudosCommonImportsModule, { declarations: [_common_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["KudosButtonComponent"]], imports: [_third_party_imports_module__WEBPACK_IMPORTED_MODULE_0__["KudosThirdPartyImportsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _common_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["KudosButtonComponent"]] }); })();


/***/ }),

/***/ "pk9M":
/*!********************************************************!*\
  !*** ./src/app/common/validators/generic-validator.ts ***!
  \********************************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
class GenericValidator {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    constructor(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    processMessages(container) {
        const messages = {};
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map((messageKey) => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~mainApp-home-home-module~mainApp-login-login-module-es2015.js.map