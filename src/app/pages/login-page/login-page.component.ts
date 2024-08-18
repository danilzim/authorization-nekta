import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginErrorResponse, LoginRequest } from '../../api/auth/auth.types';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private snackBarService = inject(MatSnackBar);
  private authService = inject(AuthService);
  private router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  get emailFormControl() {
    return this.loginForm.controls.email;
  }

  get passwordFormControl() {
    return this.loginForm.controls.password;
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.getRawValue();
    const request: LoginRequest = {
      email,
      password,
      personal_data_access: true,
    };

    this.authService.login(request).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err: HttpErrorResponse) => {
        this.snackBarService.open(this.getLoginErrorMessage(err), 'X', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          duration: 3000,
        });
      },
    });
  }
  
  private getLoginErrorMessage(httpError: HttpErrorResponse): string {
    const loginError = httpError.error as LoginErrorResponse;
    return loginError.error.data.msg;
  }
}
