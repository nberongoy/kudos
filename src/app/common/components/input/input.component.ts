import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  SimpleChanges,
  SimpleChange,
  ViewEncapsulation,
  ViewChildren,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { InfivexControl } from '../../models/control.model';

@Component({
  selector: 'infivex-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfivexInputComponent implements AfterViewInit {
  @Input()
  disableInput: boolean = false;
  @Input()
  type: string = 'text';
  @Input()
  placeholderKey: string;
  @Input()
  formControl: InfivexControl;
  @Input()
  maxCharacters: number;
  @Input()
  showHint: boolean = true;
  @Input()
  autofocus: boolean;
  @Input('required')
  isRequired: boolean = false;
  @Input()
  suppressErrors: boolean = false;
  @Input()
  label: string;
  @Input()
  suffix: string;
  @Input()
  shouldNotApplyNumberFormat: boolean = false;
  @Input()
  translationPlaceholderKeys: any;
  @Input()
  readonly: boolean = false;
  @Input()
  name: string;
  @Input()
  clearInput: boolean = false;
  @Input()
  float: string = 'always';

  hasFocus: boolean;
  @Output() onFocusIn = new EventEmitter<any>();

  @ViewChildren('autofocus')
  private inputRef: ElementRef;

  constructor() {}

  getErrors() {
    if (this.suppressErrors) {
      return [];
    }
    return this.formControl.errorChecks.filter((ec) => ec.check(this.formControl));
  }

  ngOnChanges(changes: SimpleChanges) {
    const disableInput: SimpleChange = changes.disableInput;
    if (disableInput) {
      if (disableInput.currentValue) {
        this.formControl.disable();
      } else {
        this.formControl.enable();
      }
    }
  }

  ngAfterViewInit() {
    if (this.autofocus) {
      this.inputRef.nativeElement.focus();

      // ie fix, focusing the empty input sets the description to String.Empty instead of undefined
      setTimeout(() => this.formControl.reset(), 0);

      setTimeout(() => {
        this.setPlaceHolderKeys();
      }, 1);
    }
  }

  onFocus() {
    this.hasFocus = true;
    this.onFocusIn.emit();
  }

  onFocusOut() {
    this.hasFocus = false;
  }

  onClearClick() {
    this.formControl.setValue('');
  }

  private setPlaceHolderKeys() {}
}
