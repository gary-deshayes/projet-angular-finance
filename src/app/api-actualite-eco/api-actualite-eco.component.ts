import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-api-actualite-eco',
  templateUrl: './api-actualite-eco.component.html',
  styleUrls: ['./api-actualite-eco.component.scss']
})
export class ApiActualiteEcoComponent implements OnInit {

  public news = [];

  pageSize;
  page;
  selectedValue = null;
  resultatTotal = null;
  nombrePagePossible = null;

  // Au lancement du composant la première page est appelée, on retourne 10 article par appel et les articles sont affichés
  constructor(private http: HttpClient) {
    this.page = 1;
    this.pageSize = 10;
    this.getNews(this.page, this.pageSize);
  }

  ngOnInit() {
  }

  // Récupère les articles grâce à la page et le nombre d'articles par appel
  getNews(page: string, pageSize: string) {
    this.http.get("https://newsapi.org/v2/everything?sources=les-echos&apiKey=330165c9dd764219b001ac944d15fb0a&page=" + page + "&pageSize=" + pageSize)
      .subscribe((response: Array<Object>) => {
        this.news = response["articles"];
        this.resultatTotal = response["totalResults"];
        this.nombrePagePossible = Math.round(this.resultatTotal / this.pageSize);
      });

  }
  
  // Permet de changer le nombre d'articles disponibles dans l'appel de l'api et rappel l'api
  nbPerPageChange(event: Object) {
    console.log(event);
    this.pageSize = event;
    this.getNews(this.page, this.pageSize);
  }

  // Récupère les articles précédents
  getNewsPrev() {
    if (this.page > 1) {
      this.page--;
      this.getNews(this.page, this.pageSize);
    }

  }

  // Récupère les articles suivants
  getNewsNext() {
    console.log(this.nombrePagePossible);
    if (this.page < this.nombrePagePossible) {
      this.page++;
      this.getNews(this.page, this.pageSize);
    }
  }

}
