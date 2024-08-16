import { Routes } from '@angular/router';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { DeviceListComponent } from './device-list/device-list/device-list.component';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
  { path: 'login', component: AuthorizationPageComponent },
  { path: 'devices', component: DeviceListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
