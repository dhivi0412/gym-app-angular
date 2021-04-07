
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dmodule/dashboard/dashboard.component';
import { HeaderComponent } from './dmodule/header/header.component';
import { SidemenuComponent } from './dmodule/sidemenu/sidemenu.component';
import { RegisterComponent } from './dmodule/register/register.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'sidemenu',
    component:SidemenuComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
