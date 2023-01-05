// export abstract class FormViewer {
//   formState!: "register" | "login"
//   registerIntroText!: string
//   registerActionText!: string

//   abstract submitData (formData: RegisterForm): any;

// }

interface Form {
  username: string,
  password: string
}

export interface LoginForm extends Form{}

export interface RegisterForm extends Form{
  role: "basic" | "manager" | "owner" | "admin",
  queue: null,
  serviceProvider: null,
}
