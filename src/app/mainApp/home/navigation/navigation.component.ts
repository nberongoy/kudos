import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { i18n, TRANS } from 'src/assets/translations';
import { KudosSessionService } from 'src/app/common/services/session.service';

@Component({
  selector: 'kudos-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
})
export class KudosNavigationComponent {
  public i18n = i18n;
  public TRANS = TRANS;

  constructor(private sessionService: KudosSessionService) {}

  ngOnInit() {}
}
