import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ApiYoutubeComponent } from './api-youtube/api-youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    FooterComponent,
    ApiYoutubeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
