import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { GaleriesComponent } from './galeries/galeries.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { DisplayUserComponent } from './display-user/display-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    GaleriesComponent,
    UsersComponent,
    RegisterComponent,
    UserComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
