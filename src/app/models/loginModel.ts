import { Injectable } from '@angular/core';

@Injectable()
export class loginModel {
    userName: string = "";
    loggedIn: Boolean = false;
}

export class login {
    userName: string = "";
    passWord: string = "";
}