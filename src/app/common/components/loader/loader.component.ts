import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ILoaderState } from '../../interfaces/loader-state.interface';
import { KudosLoaderService } from '../../services/loader.service';

@Component({
  selector: 'infivex-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class InfivexLoaderComponent implements OnInit, OnDestroy {
  show: boolean = false;
  private subscription: Subscription = new Subscription();
  constructor(private loaderService: KudosLoaderService, private cDef: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((state: ILoaderState) => {
      this.show = state.show;
      this.cDef.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
