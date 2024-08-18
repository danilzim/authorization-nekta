import {Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {DevicesPageComponent} from './pages/devices-page/devices-page.component';
import {canActivateAuth} from './auth/guards/auth.guard';
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component";
import {canActivateNotAuth} from "./auth/guards/not-auth.guard";

export const routes: Routes = [
  {
    path: '', component: ContentLayoutComponent, children: [
      {path: '', redirectTo: '/devices', pathMatch: 'full'},
      {
        path: 'devices',
        component: DevicesPageComponent,
        canActivate: [canActivateAuth],
      },
    ],
  },
  {path: 'login', component: LoginPageComponent, canActivate: [canActivateNotAuth]},
];
