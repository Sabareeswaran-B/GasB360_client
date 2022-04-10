import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    var role = localStorage.getItem("role")!;
    if (role == "admin")
      return true;

    if (role == "delivery"){
      this.router.navigate(['/delivery/dashboard'], { replaceUrl: true })
      return false;
    }

    this.router.navigate(['/customer'], { replaceUrl: true })
    return false;
  }

}
