import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss',
})
export class LayoutAdminComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
    alert('Logout successfull');
    this.router.navigate(['/']);
  }
}
