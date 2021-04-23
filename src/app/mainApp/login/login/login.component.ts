import { Component, Input, OnInit } from '@angular/core';
import { KudosControl } from 'src/app/common/models/control.model';
import { KudosValidatorsService } from 'src/app/common/services/validators.service';
import { Router } from '@angular/router';
import { KudosHttpClientService } from 'src/app/common/services/http-client.service';
import { DefaultHttpOptions, KudosRegex, TITLE, TWO_FACTOR_AUTH } from 'src/app/common/constants/constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KudosSessionService } from 'src/app/common/services/session.service';
import { RequestData } from 'src/app/common/models/request-data.model';
// import { AUTH_URL, GET_METADATA_CONFIGURATION, TWO_FACTOR_VALIDATION } from 'src/app/common/constants/constants';
import { environment } from 'src/environments/environment';
import i18n, { setAppLanguage, TRANS } from 'src/assets/translations';
import { Title } from '@angular/platform-browser';
import { GenericValidator } from 'src/app/common/validators/generic-validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  @Input() errorMessage: string | null = null;
  enterFunction: any;
  loginForm: FormGroup = new FormGroup({});
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } } = {};
  private genericValidator: GenericValidator = new GenericValidator({});
  loginSubscription: Subscription = new Subscription();
  passwordVisible = false;
  loading = false;

  constructor(
    private validatorService: KudosValidatorsService,
    private router: Router,
    private http: KudosHttpClientService,
    private sessionService: KudosSessionService,
    private titleService: Title,
    private formBuilder: FormBuilder
  ) {
    this.validationMessages = {
      username: {
        required: 'Username is required.',
        pattern: 'Username is not valid.',
      },
      password: {
        required: 'Password is required.',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  ngOnInit() {
    this.titleService.setTitle(`Login | ${TITLE}`);

    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.loginSubscription = this.loginForm.valueChanges.subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.loginForm);

      this.errorMessage = null;
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  gotoForgotPassword(): void {}

  loginSubmit(): void {
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
