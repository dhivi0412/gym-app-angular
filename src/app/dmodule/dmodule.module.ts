import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidemenuComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class DmoduleModule { }
