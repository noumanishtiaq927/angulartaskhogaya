import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from '../forms/register-form/register-form.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './main/home/home.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { SingleUserComponent } from './users/single-user/single-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'allusers',
        component: AllUsersComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'singleuser',
        component: SingleUserComponent,
      },
      {
        path: 'adduser',
        component: RegisterFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
