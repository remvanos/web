import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RoleGuard } from './_helpers/role.guard';
import { UserRole } from './_helpers/auth.model';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'set-password/:token', component: SetPasswordComponent },
  {
    path: 'boats',
    loadChildren: () => import('./boats/boats.module').then(m => m.BoatsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'certificates',
    loadChildren: () => import('./certificates/certificates.module').then(m => m.CertificatesModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.BOARD}
  },
  {
    path: 'boat-reservations',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.BOARD}
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.BOARD}
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.BOARD}
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'materials',
    loadChildren: () => import('./material/materials.module').then(m => m.MaterialsModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.BOARD}
  },
  {
    path: 'material-reservations',
    loadChildren: () => import('./material-reservations/material-reservations.module').then(m => m.MaterialReservationsModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.BOARD}
  },

  // wildcard route, default when nothing else matches
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
