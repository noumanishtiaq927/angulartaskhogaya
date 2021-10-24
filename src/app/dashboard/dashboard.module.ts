import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { MaterialModule } from '../material/material.module';
import { NocodeapiCrudService } from './services/nocodeapi/nocodeapi-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { TopnavComponent } from './navbar/topnav/topnav.component';
import { CardComponent } from './reuse/card/card.component';
import { HomeComponent } from './main/home/home.component';
import { GraphcardComponent } from './reuse/graphcard/graphcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../services/auth/auth-guard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AllUsersComponent,
    SingleUserComponent,
    SidenavComponent,
    TopnavComponent,
    CardComponent,
    HomeComponent,
    GraphcardComponent,
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [NocodeapiCrudService, AuthGuardService],
})
export class DashboardModule {}
