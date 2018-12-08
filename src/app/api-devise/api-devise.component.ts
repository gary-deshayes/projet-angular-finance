import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'api-devise',
  templateUrl: './api-devise.component.html',
  styleUrls: ['./api-devise.component.scss']
})

export class ApiDeviseComponent implements OnInit {
  private apiUrl = 'https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,GBPJPY,AUDUSD,BTCEUR,CADJPY&api_key=feHHOAGAv7TLYtJ0m17tRWU8JLiLY5yg';
  datas: any;

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.getDevises();
    }, 20000);
  }

  getDevises(){
    this.datas = this.http.get(this.apiUrl);
  }

  ngOnInit(){}
}
