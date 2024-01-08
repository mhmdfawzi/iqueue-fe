import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors|null => {

  let password = control.get("password");
  let confirmPassword = control.get("confirmPassword");

  if( password && confirmPassword && password?.value != confirmPassword?.value && confirmPassword.dirty){
    return {passwordMatchError : true}
  }
  return null
}
