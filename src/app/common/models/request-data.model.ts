export class RequestData {
  showLoader: boolean;
  localRequest: boolean;
  intercept: boolean;

  constructor(
    showLoader: boolean = false,
    localRequest: boolean = true,
    intercept: boolean = true
  ) {
    this.showLoader = showLoader;
    this.localRequest = localRequest;
    this.intercept = intercept;
  }
}
