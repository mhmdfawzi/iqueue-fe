import { User } from "../interfaces/user.model";
import jwt_decode from "jwt-decode";

export class SystemUser{

  id: string;
  username: string;
  role: "basic" | "manager" | "owner" | "admin";
  iat: number;
  exp: number;
  fullname: string;
  phone: string;

  constructor(jwtString: string){
    const user = this.jwtParser(jwtString) // Decoded JWT
    const {id, username, role, iat, exp, fullname, phone} = user // Destructuring the object

    //Assigning vars :
    this.id = id;
    this.username = username;
    this.iat = iat;
    this.role = role;
    this.exp = exp;
    this.fullname = fullname;
    this.phone = phone;
  }

  jwtParser(jwt: string): User{
    return jwt_decode(jwt)
  }
}
