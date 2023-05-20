import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent {

  @Output() btnClicked: EventEmitter<any> = new EventEmitter;
  @Input() txt!: string;

  clickBtn(){
    this.btnClicked.emit()
  }


}
