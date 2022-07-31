import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _listUsers: string[] = ['juan', 'pedro'];

  get users() {
    return this._listUsers;
  }

  constructor() {}
}
