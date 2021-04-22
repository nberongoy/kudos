import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE } from './common/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(TITLE);
  }
}
