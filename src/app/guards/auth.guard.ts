import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard = () => {
  const userService = inject(UserService);
  console.log('executing functional guard');
  return userService.isLoggedIn();
};
