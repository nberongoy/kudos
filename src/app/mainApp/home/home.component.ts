import { Component, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import * as _ from "lodash";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { debounceTime } from "rxjs/operators";
import { i18n, TRANS } from "src/assets/translations";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent {
  public i18n = i18n;
  public TRANS = TRANS;

  constructor() {}

  ngOnInit() {}
}
