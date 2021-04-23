import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'kudos-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class KudosButtonComponent implements OnInit {
  @Input()
  textKey: string = '';

  @Input()
  text: string = '';

  @Input()
  styles: Object = {};

  @Input()
  disabled: boolean = false;

  @Input()
  color: string = 'primary';

  @Input()
  showIcon: boolean = false;

  @Input()
  iconName: string = '';

  @Input()
  disableRipple: boolean = false;

  buttonText: string = '';

  @Input()
  buttonType: any = 'primary';

  @Input()
  block: boolean = false;

  @Output()
  onButtonClick: EventEmitter<void>;

  constructor() {
    this.onButtonClick = new EventEmitter();
  }

  ngOnInit() {
    this.addButtonText();
  }

  click(event: any) {
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
