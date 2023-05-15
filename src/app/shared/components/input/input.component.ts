import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor {



  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: string = 'text';

  value!: any;
  touched = false;
  disabled = false;


  onValueChange = (val: any) => {};

  onTouched = () => {};

  markAsTouched(){
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(val: any): void {
    this.value = val
  }

  registerOnChange(fn: any): void {
    this.onValueChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
