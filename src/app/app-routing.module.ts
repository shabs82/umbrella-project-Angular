import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './Shared/welcome/welcome.component';
import {CustomerListComponent} from './Customers/customer-list/customer-list.component';
import {CommonModule} from '@angular/common';
import {UmbrellaListComponent} from './umbrella/umbrella-list/umbrella-list.component';
import {CustomerDetailsComponent} from './Customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './Customers/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './Customers/customer-update/customer-update.component';
import {LoginWindowComponent} from './User/login-window/login-window.component';

import { AuthenticationGuard } from './auth-guard/guard/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'product', component: UmbrellaListComponent , canActivate: [AuthenticationGuard]},
  { path: 'customer', component: CustomerListComponent, canActivate: [AuthenticationGuard]},
  { path: 'customer-add', component: CustomerAddComponent},
  { path: 'customer/:id', component: CustomerDetailsComponent},
  { path: 'customer-update/:id', component: CustomerUpdateComponent},
  { path: 'login', component: LoginWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
