import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {HomeComponent} from './home/home.component';
import {GaleriesComponent} from './galeries/galeries.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"user", component: UserComponent,
    children:[
      {path:"login", component: LoginComponent},
      {path:"register", component: RegisterComponent}
    ]
  },
  {path:"home", component:HomeComponent},
  {path:"galeries", component:GaleriesComponent},
  {path:"users", component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
