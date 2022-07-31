import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _listUsers: string[] = [];
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
 users() {
    return this.http.get<[]>(this.apiUrl);
  }
}
