import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import * as _ from 'lodash';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { i18n, TRANS } from 'src/assets/translations';
import { TITLE } from 'src/app/common/constants/constants';

@Component({
  selector: 'checkerOut',
  templateUrl: './checkerOut.component.html',
  styleUrls: ['./checkerOut.component.less'],
})
export class CheckerOutComponent {
  public i18n = i18n;
  public TRANS = TRANS;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`Checker Out | ${TITLE}`);
  }
}
