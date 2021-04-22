import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { ILoaderState } from "../interfaces/loader-state.interface";
import { RequestData } from "../models/request-data.model";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class KudosLoaderService {
  private loaderSubject: Subject<ILoaderState>;
  loaderState: Observable<ILoaderState>;
  private counter: number;

  constructor() {
    this.loaderSubject = new Subject<ILoaderState>();
    this.loaderState = this.loaderSubject.asObservable();
    this.counter = 0;
  }

  show() {
    ++this.counter;
    this.loaderSubject.next(<ILoaderState>{ show: true });
  }

  hide() {
    --this.counter;
    if (this.counter < 0) {
      this.counter = 0;
    }
    if (this.counter === 0) {
      this.loaderSubject.next(<ILoaderState>{ show: false });
    }
  }
}

@Injectable({
  providedIn: "root",
})
export class KudosShowHideLoaderService {
  constructor(private loaderService: KudosLoaderService) {}
  public showLoaderAndHideOnCompletion<T>(
    observable: Observable<T>,
    requestData?: RequestData
  ): Observable<T> {
    if (requestData.showLoader) {
      this.loaderService.show();
    }
    return observable.pipe(
      finalize(() => {
        if (requestData.showLoader) {
          this.loaderService.hide();
        }
      })
    );
  }
}
