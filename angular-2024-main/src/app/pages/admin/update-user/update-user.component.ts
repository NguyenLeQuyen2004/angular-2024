import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/User';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent implements OnInit {
  user: User = {} as User;
  userForm: FormGroup = {} as FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.userService.getUserById(id).subscribe((user) => {
        this.user = user;
        this.userForm.patchValue(this.user);
      });
    }
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  handleSubmit() {
    // Kiểm tra tính hợp lệ của form
    if (this.userForm.valid) {
      // valid: Thành công
      // Cập nhật sản phẩm
      const updateUser: User = {
        ...this.user,
        ...this.userForm.value,
      };
      // console.log(this.productForm.value);
      this.userService.updateUser(updateUser).subscribe((data) => {
        console.log('Update successful', data);
        alert('Update successful');
        this.router.navigate(['/admin/list-users']);
      });
    }
  }
}
