import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'infivex-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfivexButtonComponent implements OnInit {
  @Input()
  textKey: string = '';
  @Input()
  text: string = '';
  @Input()
  styles: Object;
  @Input()
  disabled: boolean = false;
  @Input()
  color: string = 'primary';
  @Input()
  buttonType: string = 'flat';

  @Input()
  showIcon: boolean = false;
  @Input()
  iconName: string;

  @Input()
  disableRipple: boolean;

  buttonText: string;
  @Output()
  onButtonClick: EventEmitter<void>;

  constructor() {
    this.onButtonClick = new EventEmitter();
  }

  ngOnInit() {
    this.addButtonText();
  }

  click(event) {
    if (!this.disabled) {
      event.currentTarget.blur();
      this.onButtonClick.emit(event);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.text.isFirstChange() && changes.text.previousValue !== changes.text.currentValue) {
      this.addButtonText();
    }
  }

  addButtonText() {
    if (this.textKey === undefined && this.text === undefined) {
      throw Error('No button text provided.');
    }

    if (this.text !== undefined) {
      this.buttonText = this.text;
    } else {
      this.loadTranslation();
    }
  }

  loadTranslation() {
    //to be implemented with translation service
  }
}
