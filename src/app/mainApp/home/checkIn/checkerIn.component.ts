import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import * as _ from 'lodash';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { i18n, TRANS } from 'src/assets/translations';
import { TITLE } from 'src/app/common/constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/common/validators/generic-validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'checkerIn',
  templateUrl: './checkerIn.component.html',
  styleUrls: ['./checkerIn.component.less'],
})
export class CheckerInComponent {
  public i18n = i18n;
  public TRANS = TRANS;
  index = 0;
  checkerInForm: FormGroup = new FormGroup({});
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } } = {};
  private genericValidator: GenericValidator = new GenericValidator({});
  checkerInSubscription: Subscription = new Subscription();
  loading = false;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.validationMessages = {
      inspectedDate: {},
      inspectedTime: {},
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.titleService.setTitle(`Checker In | ${TITLE}`);

    this.checkerInForm = this.formBuilder.group({
      inspectedDate: [null, []],
      inspectedTime: [null, []],
      inspector: [null, []],
      containerNo: [null, []],
      shippingLines: [null, []],
      sizeType: [null, []],
      class: [null, []],
      manufactureDate: [null, []],
      shipperName: [null, []],
      plateNumber: [null, []],
      notes: [null, []],
      boxCondition: [null, []],
      emptyLoaded: [null, []],
      yardLocation: [null, []],
      cleanliness: [null, []],
      component: [null, []],
      damage: [null, []],
      repair: [null, []],
      location: [null, []],
      length: [null, []],
      width: [null, []],
      quantity: [null, []],
      description: [null, []],
    });

    this.checkerInSubscription = this.checkerInForm.valueChanges.subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.checkerInForm);
    });
  }

  ngOnDestroy(): void {
    this.checkerInSubscription.unsubscribe();
  }

  saveHandler() {
    for (const i in this.checkerInForm.controls) {
      this.checkerInForm.controls[i].markAsDirty();
      this.checkerInForm.controls[i].updateValueAndValidity();
    }

    if (this.checkerInForm.valid) {
      if (this.checkerInForm.dirty) {
      }
    }
  }
}
