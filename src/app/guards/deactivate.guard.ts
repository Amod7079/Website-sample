import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
@Injectable()
export class DeactivateGuard implements CanDeactivate<ContactUsComponent> {
  canDeactivate(
    component: ContactUsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    //logic return true/ false

    console.log('Leaving Contact us page');
    return component.changesSaved;
  }
}
