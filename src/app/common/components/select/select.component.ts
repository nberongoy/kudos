import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ISelect } from '../../interfaces/select.interface';
import { InfivexControl } from '../../models/control.model';

@Component({
  selector: 'infivex-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfivexSelectComponent {
  @Input()
  label: string;
  @Input()
  dataSource: Array<ISelect>;
  @Input()
  required: boolean;
  @Input()
  formControl: InfivexControl;
  @Input()
  selected: any = null;
  @Input()
  float: string = 'always';

  @Output()
  onSelectChange: EventEmitter<ISelect> = new EventEmitter();

  dropdownChanged(value) {
    this.onSelectChange.emit(value);
  }

  getErrors() {
    return this.formControl.errorChecks.filter((ec) => ec.check(this.formControl));
  }
}
