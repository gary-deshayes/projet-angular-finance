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
import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { PagePlaylistComponent } from './page-playlist/page-playlist.component';
import { PlaylistComponent } from './playlist/playlist.component';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: "238523767005-90jndv6p8oot3la91kv9u7kg9b3kaj2i.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
  ux_mode: "popup",
  scope: [
      "https://www.googleapis.com/auth/youtube"
  ].join(" ")
};

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
    PageVideoComponent,
    PagePlaylistComponent,
    PlaylistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [ApiYoutubeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
