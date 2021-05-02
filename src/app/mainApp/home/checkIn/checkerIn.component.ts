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
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import SignaturePad from 'signature_pad';
import { lookup } from 'src/app/common/constants/lookup';
import { CheckInService } from './checkerIn.service';
import { ContainerInInspectionInterface } from 'src/app/common/interfaces/container.interface';
import { ContainerInInspection } from 'src/app/common/models/container.model';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

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
  damageForm: FormGroup = new FormGroup({});

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } } = {};
  private genericValidator: GenericValidator = new GenericValidator({});
  checkerInSubscription: Subscription = new Subscription();
  damageSubscription: Subscription = new Subscription();
  loading = false;
  visible = false;
  canvas: any;
  signaturePad: any;

  // look ups
  lookupSizeType: any = lookup.sizeType();
  lookupClass: any = lookup.class();
  lookupBoxCondition: any = lookup.boxCondtion();
  lookupEmptyLoaded: any = lookup.emptyLoaded();
  lookupYardLocation: any = lookup.yardLocation();
  lookupCleanliness: any = lookup.cleanliness();
  lookupShippingLines: any = lookup.shippingLines();

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private msg: NzMessageService,
    private checkInService: CheckInService
  ) {
    this.validationMessages = {
      containerNo: { required: 'Container no. is required.' },
      shippingLines: { required: 'Shipping line is required.' },
      boxCondition: { required: 'Box condition is required.' },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.titleService.setTitle(`Checker In | ${TITLE}`);

    this.checkerInForm = this.formBuilder.group({
      inspectedDate: [null, []],
      inspectedTime: [null, []],
      inspector: [null, []],
      containerNo: [null, [Validators.required]],
      shippingLines: [null, [Validators.required]],
      sizeType: [null, []],
      class: [null, []],
      manufactureDate: [null, []],
      shipperName: [null, []],
      plateNumber: [null, []],
      notes: [null, []],
      boxCondition: [null, [Validators.required]],
      emptyLoaded: [null, []],
      yardLocation: [null, []],
      cleanliness: [null, []],
      remarks: [null, []],
    });

    this.damageForm = this.formBuilder.group({
      component: [null, []],
      damage: [null, []],
      repair: [null, []],
      location: [null, []],
      length: [null, []],
      width: [null, []],
      quantity: [null, []],
      description: [null, []],
    });

    this.resetCheckInValue(new ContainerInInspection());

    this.checkerInSubscription = this.checkerInForm.valueChanges.subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.checkerInForm);
    });

    this.damageSubscription = this.damageForm.valueChanges.subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.damageForm);
    });

    this.canvas = document.getElementById('signature-pad');
    this.signaturePad = new SignaturePad(this.canvas, {
      backgroundColor: 'rgb(255, 255, 255)',
    });

    window.onresize = this.resizeCanvas;
    this.resizeCanvas();
  }

  ngOnDestroy(): void {
    this.checkerInSubscription.unsubscribe();
    this.damageSubscription.unsubscribe();
  }

  resetCheckInValue(container: ContainerInInspectionInterface) {
    if (container) {
      this.checkerInForm.reset();
      this.checkerInForm.patchValue({ ...container });
    }
  }

  saveHandler() {
    for (const i in this.checkerInForm.controls) {
      this.checkerInForm.controls[i].markAsDirty();
      this.checkerInForm.controls[i].updateValueAndValidity();
    }

    if (this.checkerInForm.valid) {
      if (this.checkerInForm.dirty) {
        this.checkInService.checkInContainer(this.checkerInForm.value);
        this.resetCheckInValue(new ContainerInInspection());
      }
    }

    // if (this.signaturePad.isEmpty()) {
    //   return alert('Please provide a signature first.');
    // }

    // var data = this.signaturePad.toDataURL('image/png');
  }

  resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvas.getContext('2d').scale(ratio, ratio);
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  clearSignature(e: any) {
    e.preventDefault();
    this.signaturePad.clear();
  }

  cancel(e: any): void {
    e.preventDefault();
    this.visible = false;
  }

  open(e: any): void {
    e.preventDefault();
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };

  listOfDamage: any[] = [];

  addDamage(): void {
    for (const i in this.damageForm.controls) {
      this.damageForm.controls[i].markAsDirty();
      this.damageForm.controls[i].updateValueAndValidity();
    }

    if (this.damageForm.valid) {
      if (this.damageForm.dirty) {
        this.listOfDamage = [...this.listOfDamage, this.damageForm.value];
        this.damageForm.reset();
        this.visible = false;
      }
    }
  }
}
