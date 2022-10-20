import { ROL } from "./roles.enum";

export class User {
  userName = "";
  userSurname = "";
  userEmail = "";
  userPassword = "";
  rol = ROL.USER;

  constructor(userName, userSurname, userEmail, userPassword, rol) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.rol = rol;
  }
}
