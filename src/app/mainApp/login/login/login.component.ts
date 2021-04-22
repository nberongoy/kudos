import { Component, OnInit } from '@angular/core';
import { KudosControl } from 'src/app/common/models/control.model';
import { KudosValidatorsService } from 'src/app/common/services/validators.service';
import { Router } from '@angular/router';
import { KudosHttpClientService } from 'src/app/common/services/http-client.service';
import { DefaultHttpOptions, TWO_FACTOR_AUTH } from 'src/app/common/constants/constants';
import { FormGroup } from '@angular/forms';
import { KudosSessionService } from 'src/app/common/services/session.service';
import { RequestData } from 'src/app/common/models/request-data.model';
// import { AUTH_URL, GET_METADATA_CONFIGURATION, TWO_FACTOR_VALIDATION } from 'src/app/common/constants/constants';
import { environment } from 'src/environments/environment';
import { setAppLanguage } from 'src/assets/translations';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  enterFunction: any;

  constructor(
    private validatorService: KudosValidatorsService,
    private router: Router,
    private http: KudosHttpClientService,
    private sessionService: KudosSessionService
  ) {}
  ngOnInit() {}
}
