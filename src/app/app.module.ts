import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ApiDeviseComponent } from './api-devise/api-devise.component';
import { FooterComponent } from './footer/footer.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';
import { ApiYoutubeComponent } from './api-youtube/api-youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    ApiDeviseComponent,
    FooterComponent,
    EconomicCalendarComponent,
    ApiYoutubeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
