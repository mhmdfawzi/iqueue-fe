
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum ToastTypes {
  success,
  error
}

export interface ToastData {
  title: string,
  content: string,
  show?: boolean,
  type: ToastTypes,
  progressWidth?: string
}

@Injectable({
  providedIn: "root"
})

export class CustomToasterService{

  data!: ToastData
  public open : Subject<ToastData> = new Subject<ToastData>()

  show(data: ToastData){
    this.data = {...data, show: true, progressWidth: '100%'}
    this.open.next(this.data)
  }

  hide(){
    this.data = {...this.data, show: false}
    this.open.next(this.data)
  }

}
