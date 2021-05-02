import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { i18n, TRANS } from 'src/assets/translations';
import { KudosSessionService } from 'src/app/common/services/session.service';
import { CheckInService } from '../checkIn/checkerIn.service';

@Component({
  selector: 'inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.less'],
})
export class InquiryComponent {
  public i18n = i18n;
  public TRANS = TRANS;

  data: any = [];

  constructor(private sessionService: KudosSessionService, private checkInService: CheckInService) {}

  ngOnInit() {
    this.data = this.checkInService.getContinerList();
  }
}
