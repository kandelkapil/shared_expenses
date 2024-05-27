import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  toggle = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  signUpForm = this.formBuilder.group({
    email: '',
    password: '',
    confirmPassword: ''
  });


  togglePassword() {
    this.toggle = !this.toggle;
  }


  handleSubmit(): void {
    const { value: { email, password, confirmPassword } } = this.signUpForm;
    if (email && password && confirmPassword) {
      alert(JSON.stringify(this.signUpForm.value));
      this.signUpForm.reset();
    }

  } 

}