import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  user: User = {} as User;
  userForm: FormGroup = {} as FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  handleSubmit() {
    console.log(this.userForm.valid);
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.register(this.userForm.value).subscribe({
        next: (data) => {
          console.log('Register successfully!', data);
          if (confirm('Register successfully!')) {
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          console.log('Register failed!', err);
          alert(`Register failed!, ${err.error}`);
        },
      });
    } else {
      console.log('form is not valid!');
    }
  }
}
