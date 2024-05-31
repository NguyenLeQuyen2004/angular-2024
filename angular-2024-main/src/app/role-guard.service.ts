import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const role = localStorage.getItem('userRole');
    const token = localStorage.getItem('accessToken');
    if (token && role === '1') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
