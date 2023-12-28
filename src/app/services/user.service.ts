import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    new User('Durgesh', 123),
    new User('Ankit', 1234),
    new User('Harsh', 252),
  ];
  constructor() {}

  isLoggedIn() {
    return true;
  }
  getUsers() {
    return this.users;
  }
}

export class User {
  constructor(public name: string, public userId: number) {}
}
