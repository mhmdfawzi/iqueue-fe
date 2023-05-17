import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss']
})
export class SmallButtonComponent {

  @Output() btnClicked: EventEmitter<any> = new EventEmitter;
  @Input() txt!: string;


  clickBtn(){
    this.btnClicked.emit()
  }


}
