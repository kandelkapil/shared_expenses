import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  toggle = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  forgotPasswordForm = this.formBuilder.group({
    password: '',
  });


  togglePassword() {
    this.toggle = !this.toggle;
  }

  handleSubmit(): void {
    const { value: { password } } = this.forgotPasswordForm;
    if (password) {
      alert(JSON.stringify(password));
      this.forgotPasswordForm.reset();
    }

  }
}
