import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class ActivateGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //logic :
    console.log('activated gauard executed');

    if (this.userService.isLoggedIn()) {
      //other logic
      return true;
    }

    this.router.navigate(['/about']);

    return false;
  }
}
