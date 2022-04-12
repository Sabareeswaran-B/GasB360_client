import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router: Router) {

  }


  canActivate() {
    var role = localStorage.getItem("role");
    if (role == null) {
      return true;
    }
    if (role == "delivery") {
      this.router.navigate(['/delivery/dashboard'], { replaceUrl: true })
      return false;
    }

    if (role == "admin") {
      this.router.navigate(['/admin/dashboard'], { replaceUrl: true })
      return false;
    }

    this.router.navigate(['/customer/dashboard'], { replaceUrl: true })
    return false;
  }

}
