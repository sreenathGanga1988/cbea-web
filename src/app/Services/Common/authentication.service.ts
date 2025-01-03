import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PublicHttpHelperService } from './public-http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httphelper: PublicHttpHelperService) {

  }


  public login(obj: any) {

    return this.httphelper.Login(obj).pipe(
      tap((val) => {
        this.setSession(val); // Perform the side effect
      })
    );

    // this.httphelper.Login(obj).subscribe((val) => {
    //   this.setSession(val)
    //   return val;
    // });
    // return obj;


  }
  private setSession(authResult: any) {
    console.log(authResult);
    localStorage.setItem('userdata', JSON.stringify(authResult));
    localStorage.setItem("expires_at", authResult);


  }

  logout() {
    localStorage.removeItem("userdata");
    localStorage.removeItem("expires_at");
  }

  public getUser() {


    var userdata = localStorage.getItem("userdata")
    return userdata;

  }

  public getUserRole() {


    var userdata = localStorage.getItem("userdata")
    return '';
    //return userdata;

  }


  public isLoggedIn() {


    var userdata = localStorage.getItem("userdata")
    if (userdata != null) {

      return true;
    }

    else {
      return false;
    }
  }

  isLoggedOut() {
    return this.isLoggedIn();
  }


}
export class UserLoginDTO {
  userName?: string;
  password?: string;
}
