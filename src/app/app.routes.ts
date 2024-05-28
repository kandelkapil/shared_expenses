import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'signup', component: SignupComponent, title: 'Sign Up' },
    { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot Password' },
    { path: '**', redirectTo: '' } // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }