import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {AuthGuardService} from './auth-guard.service'


const routes: Routes = [

  
  {
    path:"browse",
    component:DataComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
    
  },
  {
    path:"dashboard",
    component:UserhomeComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
