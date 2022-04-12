import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    var role = localStorage.getItem("role")!;
    if (role == "delivery")
      return true;

    if (role == "admin") {
      this.router.navigate(['/admin/dashboard'], { replaceUrl: true })
      return false;
    }

    this.router.navigate(['/customer'], { replaceUrl: true })
    return false;
  }

}
