import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  submit(): void {
    if (this.signupForm.invalid) {
      alert('Form is invalid');
      console.log("invalid data")
      return;
    }

    console.log(this.signupForm.value);
  }

  get getEmail() {
    return this.signupForm.get('email');
  }
  get getUsername() {
    return this.signupForm.get('username');
  }
  get getPassword() {
    return this.signupForm.get('password');
  }
}
