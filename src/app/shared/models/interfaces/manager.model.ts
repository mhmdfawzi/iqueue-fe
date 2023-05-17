import { RegisterForm } from "./form.model";

export interface Manager{
  username: string,
  role: RegisterForm['role']
}
