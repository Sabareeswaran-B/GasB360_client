import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginRequest } from '../model/login.request';
import { LoginResponse } from '../model/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient,
    private _router: Router,
    ) {}

  //Employee Login
  employeeLogin(signinForm: LoginRequest) {
    // console.log(signinForm);
    return this.http.post(environment.baseUrl + '/Employee/Login', signinForm).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  //Check if LoggedIn or Not
  isLoggedIn(): boolean {
    const userJson = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    return userJson == null?false:true;
  }

  userData():LoginResponse
  {
    return JSON.parse(localStorage.getItem('user')!) as LoginResponse;
  }

  //Employee Logout
  logout()
  {
    localStorage.clear();
    this._router.navigate(['/ login']);
  }

}
