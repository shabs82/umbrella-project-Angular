import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './Shared/welcome/welcome.component';
import {CustomerListComponent} from './Customers/customer-list/customer-list.component';
import {CommonModule} from '@angular/common';
import {UmbrellaListComponent} from './umbrella/umbrella-list/umbrella-list.component';
import {CustomerDetailsComponent} from './Customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './Customers/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './Customers/customer-update/customer-update.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'product', component: UmbrellaListComponent},
  { path: 'customer', component: CustomerListComponent},
  { path: 'customer-add', component: CustomerAddComponent},
  { path: 'customer/:id', component: CustomerDetailsComponent},
  { path: 'customer-update/:id', component: CustomerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
