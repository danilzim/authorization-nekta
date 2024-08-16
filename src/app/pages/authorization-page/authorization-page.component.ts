import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../data/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authorization-page.component.html',
  styleUrl: './authorization-page.component.scss',
})
export class AuthorizationPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    personal_data_access: new FormControl(true, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value).subscribe((res) => {
        this.router.navigate(['devices']);
        console.log(res);
      });
    }
  }
}
