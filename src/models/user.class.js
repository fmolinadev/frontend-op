import { ROL } from "./roles.enum";

export class User {
  userName = "";
  userSurname = "";
  userPassword = "";
  rol = ROL.USER;

  constructor(userName, userSurname, userPassword, rol) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.userPassword = userPassword;
    this.rol = rol;
  }
}
