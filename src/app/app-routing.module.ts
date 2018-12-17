import { PageActualiteEconomiqueComponent } from './page-actualite-economique/page-actualite-economique.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTutorielComponent } from './page-tutoriel/page-tutoriel.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent},
  { path: 'tutoriel', component: PageTutorielComponent},
  { path: 'actualite-economique', component: PageActualiteEconomiqueComponent}
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
