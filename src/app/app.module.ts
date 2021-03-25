import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DmoduleModule } from './dmodule/dmodule.module';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DmoduleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
