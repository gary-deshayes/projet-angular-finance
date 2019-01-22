import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ApiDeviseComponent } from './api-devise/api-devise.component';
import { FooterComponent } from './footer/footer.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';
import { ApiYoutubeComponent } from './api-youtube/api-youtube.component';
import { PageTutorielComponent } from './page-tutoriel/page-tutoriel.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ApiActualiteEcoComponent } from './api-actualite-eco/api-actualite-eco.component';
import { PageActualiteEconomiqueComponent } from './page-actualite-economique/page-actualite-economique.component';
import { PageVideoComponent } from './page-video/page-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    ApiDeviseComponent,
    FooterComponent,
    EconomicCalendarComponent,
    ApiYoutubeComponent,
    PageTutorielComponent,
    PageAccueilComponent,
    ApiActualiteEcoComponent,
    PageActualiteEconomiqueComponent,
    PageVideoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiYoutubeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
