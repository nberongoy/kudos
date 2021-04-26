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
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  public i18n = i18n;
  public TRANS = TRANS;

  gridStyle = {
    width: '50%',
    textAlign: 'center',
  };

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle(`Menu | ${TITLE}`);
  }

  checkerIn() {
    this.router.navigate(['home/checker-in']);
  }

  checkerOut() {
    this.router.navigate(['home/checker-out']);
  }
}
