import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(){
 
    var isLoggedin = localStorage.getItem("isLoggedin");
    var role = localStorage.getItem("role");
    if (isLoggedin == "true" && role == "admin")
      return true;

    this.router.navigate(['/login'], { replaceUrl: true })
    return false;
  }
  
}
