import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton
  ],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss'
})
export class ContentLayoutComponent {
  private authService = inject(AuthService);

  onLogout() {
    this.authService.logout();
  }
}

