import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private cookie: CookieService) {

  }

  canActivate() {
    var isLoggedin = this.cookie.get("isLoggedin");
    if (isLoggedin == "true")
      return true;

    this.router.navigate([''], { replaceUrl: true })
    return false;
  }

}
