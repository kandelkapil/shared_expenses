import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  toggle= false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });


  togglePassword() {
    this.toggle = !this.toggle;
  }


  onSubmit(): void {
    alert(JSON.stringify(this.loginForm.value));
    this.loginForm.reset();
  }

}