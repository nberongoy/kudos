import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { i18n, TRANS } from 'src/assets/translations';
import { KudosSessionService } from 'src/app/common/services/session.service';
import { CheckInService } from '../checkIn/checkerIn.service';
import { ContainerInInspection } from 'src/app/common/models/container.model';
import { ContainerInInspectionInterface } from 'src/app/common/interfaces/container.interface';
import { lookup } from 'src/app/common/constants/lookup';
import * as moment from 'moment';

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
    this.data = this.mapLookupDescription(this.checkInService.getContinerList());
  }

  mapLookupDescription(data: ContainerInInspectionInterface[]): ContainerInInspectionInterface[] {
    return data.map((container: ContainerInInspectionInterface) => {
      return {
        ...container,
        shippingLines: lookup.shippingLines(container.shippingLines),
        sizeType: container.sizeType ? lookup.sizeType(container.sizeType) : '',
        class: container.class ? lookup.class(container.class) : '',
        inspectedDate: moment(container.inspectedDate).format('YYYY-MM-DD'),
      } as ContainerInInspectionInterface;
    });
  }
}
