import { FormControl } from '@angular/forms';
import { KudosFormControlDetails } from './form-control.model';

export class KudosControl extends FormControl {
  errorChecks: Array<KudosFormControlDetails>;
  controlName: string;
  constructor(controlName = '', public _errorChecks: Array<KudosFormControlDetails> = []) {
    super(
      '',
      _errorChecks.filter((t) => !t.isAsync).map((ec) => ec.validator),
      _errorChecks.filter((t) => t.isAsync).map((ec) => ec.validator)
    );
    this.errorChecks = _errorChecks;
    this.controlName = controlName;
  }
}
