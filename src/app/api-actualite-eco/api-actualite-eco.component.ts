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

  constructor(private http: HttpClient) {
    this.page = 1;
    this.pageSize = 10;
    this.getNews(this.page, this.pageSize);
   }

  ngOnInit() {
  }

  getNews(page: string, pageSize: string){
    this.http.get("https://newsapi.org/v2/everything?sources=les-echos&apiKey=330165c9dd764219b001ac944d15fb0a&page=" + page + "&pageSize=" + pageSize)
    .subscribe((response: Array<Object>) => {
      console.log(response);
      this.news = response["articles"];
      console.log(this.news);
    });

  }

  nbPerPageChange(event : Object){
    console.log(event);
    this.pageSize = event;
    this.getNews(this.page, this.pageSize);
  }

}
