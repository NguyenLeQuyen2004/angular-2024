import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/User';
import { UserService } from '../../../user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  deleteUser(id: any) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(id).subscribe(() => {
        console.log('User deleted successfully');
        alert('User deleted successfully');
        this.users = this.users?.filter((user) => user.id !== id);
      });
    }
  }
}
