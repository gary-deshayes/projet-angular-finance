import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-api-economy-actuality',
  templateUrl: './api-economy-actuality.component.html',
  styleUrls: ['./api-economy-actuality.component.scss']
})
export class ApiEconomyActualityComponent implements OnInit {

  public news = [];
  pageSize;
  page;
  selectedValue = null;
  resultatTotal = null;
  nombrePagePossible = null;
  loading = true;
  error = false;

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
    this.error = false;
    this.loading = true;
    this.http.get("https://newsapi.org/v2/everything?sources=les-echos&apiKey=330165c9dd764219b001ac944d15fb0a&page=" + page + "&pageSize=" + pageSize)
      .subscribe((response: Array<Object>) => {
        this.news = response["articles"];
        this.resultatTotal = response["totalResults"];
        this.nombrePagePossible = Math.round(this.resultatTotal / this.pageSize);
        this.loading = false;
      }, 
      (error)=>{
        if(error.status == 0){
          alertify.notify("Erreur lors de la récupération des actualités économiques, réessayez plus tard", "error", 15);
          this.error = true;
        }
      });

  }
  
  // Permet de changer le nombre d'articles disponibles dans l'appel de l'api et rappel l'api
  nbPerPageChange(event: Object) {
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
    if (this.page < this.nombrePagePossible) {
      this.page++;
      this.getNews(this.page, this.pageSize);
    }
  }

}
