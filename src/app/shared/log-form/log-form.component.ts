import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent {
  @Output() formSubmission = new EventEmitter();

  @Input() introText: string = "...";
  @Input() btnActionText: string = "...";

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router){}

  submit() {
    if (this.form.valid) {
      this.formSubmission.emit(this.form.value);
    }
  }

  navToHome(){
    this.router.navigate(["/"])
  }
}
