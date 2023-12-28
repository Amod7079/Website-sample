import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { of, delay, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<Observable<User[]>> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // logic
    return of(this.userService.getUsers()).pipe(delay(2000));
  }
}
