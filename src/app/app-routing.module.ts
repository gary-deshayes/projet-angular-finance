import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { PagePlaylistComponent } from './page-playlist/page-playlist.component';
import { FormUpdatePlaylistPageComponent } from './form-update-playlist-page/form-update-playlist-page.component';
import { PageOnevideoComponent } from './page-onevideo/page-onevideo.component';
import { NewPlaylistPage } from './new-playlist-page/new-playlist-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EconomyActualityPageComponent } from './economy-actuality-page/economy-actuality-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'tutoriel', component: TutorialPageComponent},
  { path: 'actualite-economique', component: EconomyActualityPageComponent},
  { path: 'playlists', component: PagePlaylistComponent},
  { path: 'modification-playlist/:id', component:  FormUpdatePlaylistPageComponent},
  { path: 'video/:id', component: PageOnevideoComponent},
  { path: "nouvelle-playlist", component: NewPlaylistPage}
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
  
})
export class AppRoutingModule { }
