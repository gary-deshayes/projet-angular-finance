import { ApiYoutubeComponent } from './api-youtube/api-youtube.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTutorielComponent } from './page-tutoriel/page-tutoriel.component';

const routes: Routes = [
  { path: 'tutoriel', component: PageTutorielComponent}
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
