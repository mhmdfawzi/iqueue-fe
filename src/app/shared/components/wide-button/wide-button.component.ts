import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wide-button',
  templateUrl: './wide-button.component.html',
  styleUrls: ['./wide-button.component.scss']
})
export class WideButtonComponent {

  @Output() btnClicked: EventEmitter<any> = new EventEmitter;
  @Input() txt!: string;


  clickBtn(){
    this.btnClicked.emit()
  }

}
