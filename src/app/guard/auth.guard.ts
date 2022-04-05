import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router) {

  }

  canActivate() {
    var isLoggedin = localStorage.getItem("isLoggedin")!;
    if (isLoggedin == "true")
      return true;

    this.router.navigate(['/customer/login'], { replaceUrl: true })
    return false;
  }

}
