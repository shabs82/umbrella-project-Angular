import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './Customers/customer-list/customer-list.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { WelcomeComponent } from './Shared/welcome/welcome.component';
import { UmbrellaListComponent } from './umbrella/umbrella-list/umbrella-list.component';
import { CustomerDetailsComponent } from './Customers/customer-details/customer-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomerAddComponent } from './Customers/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './Customers/customer-update/customer-update.component';

import { UmbrellaAddComponent } from './umbrella/umbrella-add/umbrella-add.component';
import { UmbrellaDetailsComponent } from './umbrella/umbrella-details/umbrella-details.component';
import { UmbrellaUpdateComponent } from './umbrella/umbrella-update/umbrella-update.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { LoginWindowComponent } from './User/login-window/login-window.component';
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from './auth-guard/jwtInterceptor';


// @ts-ignore


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    NavbarComponent,
    WelcomeComponent,
    UmbrellaListComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    UmbrellaAddComponent,
    UmbrellaDetailsComponent,
    UmbrellaUpdateComponent,
    UserProfileComponent,
    CreateUserComponent,
    LoginWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
