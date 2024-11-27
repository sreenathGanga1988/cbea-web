import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/Common/authentication.service';
import { CustomApiResponse } from '../../models/Common/custom-api-responseo.model';
import { UserIdentityInfoService } from '../../Services/Common/user-identity-info.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authservice: AuthenticationService, private useridentityservice: UserIdentityInfoService,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.authservice.login(loginData).subscribe({
        next: (res: CustomApiResponse) => {

          if (res.statusCode == 200) {


            console.log('Login successful', res);
            const userTypeId = this.useridentityservice.getUserValue("userTypeId");
            if (userTypeId === 1) {
              this.router.navigate(['/admin']);
            }
            else {

            }

            // Handle successful login, e.g., redirect to another page
          }},
          error: (error: any) => {
            console.error('Login failed', error);
            // Handle error (e.g., show an error message)
          }
        });
    } else {
      console.log('Form Invalid');
    }
  }
}
