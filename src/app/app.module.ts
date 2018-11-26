import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ApiDeviseComponent } from './api-devise/api-devise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    ApiDeviseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
