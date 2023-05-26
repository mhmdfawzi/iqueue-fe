import { RegisterForm } from "./form.model";
import { User } from "./user.model";

export interface Manager extends User{
  _id: string
  // username: string,
  // role: RegisterForm['role']
}
