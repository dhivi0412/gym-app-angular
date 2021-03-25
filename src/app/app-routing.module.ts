import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dmodule/dashboard/dashboard.component';
import { HeaderComponent } from './dmodule/header/header.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'header',
    component:HeaderComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
