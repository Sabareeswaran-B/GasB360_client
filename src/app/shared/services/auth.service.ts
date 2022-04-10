import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SignIn } from 'src/models/SignIn';
import { SignUp } from 'src/models/SignUp';
import { IUser } from 'src/models/IUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router,
    ) {}

  loginUser(signinForm: SignIn) {
    console.log(signinForm);
    return this.http.post(environment.baseUrl + '/Employee/Login', signinForm).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  registerUser(signupForm: SignUp) {
    return this.http.post(environment.baseUrl + '/users/register', signupForm).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  isLoggedIn(): boolean {
    const userJson = JSON.parse(localStorage.getItem('user')!) as IUser;
    return userJson == null?false:true;
  }

  userData():IUser
  {
    return JSON.parse(localStorage.getItem('user')!) as IUser;
  }

  logout()
  {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);


  }

}
