import { Injectable } from '@angular/core';
import { User } from './interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.baseURL}/register`, user);
  }

  login(user: User) {
    return this.http.post(`${this.baseURL}/login`, user);
  }
}
