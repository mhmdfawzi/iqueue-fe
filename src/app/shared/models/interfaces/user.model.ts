export interface User{
  sub: string;
  username: string;
  role: "basic" | "manager" | "owner" | "admin";
  iat: number;
  exp: number;
  fullname: string;
  phone: string;
}

export interface BasicUser extends User{
  _id: string
}
