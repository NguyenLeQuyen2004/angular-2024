import { Injectable } from '@angular/core';
import { User } from './interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }
  getUserById(id: number | string | undefined) {
    return this.http.get<User>(`${this.baseURL}/users/${id}`);
  }
  register(user: User) {
    return this.http.post(`${this.baseURL}/register`, user);
  }

  login(user: User) {
    return this.http.post(`${this.baseURL}/login`, user);
  }
  createUser(user: User) {
    return this.http.post(`${this.baseURL}/users`, user);
  }
  updateUser(user: User) {
    return this.http.put<User>(`${this.baseURL}/${user.id}`, user);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.baseURL}/users/${id}`);
  }
}
