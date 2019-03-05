import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'api-currency',
  templateUrl: './api-currency.component.html',
  styleUrls: ['./api-currency.component.scss']
})

export class ApiCurrencyComponent implements OnInit {
  private apiUrl = 'https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,USDCAD,CADCHF,NZDCAD,GBPJPY,AUDUSD,BTCEUR,CADJPY&api_key=feHHOAGAv7TLYtJ0m17tRWU8JLiLY5yg';
  datas: any;
  error = {};

  constructor(private http: HttpClient) {
    this.getDevises();

  }

  // Récuperation des devises
  getDevises(){
    this.error = {};
    this.http.get(this.apiUrl).subscribe((response)=>{
      this.datas = response;
    },
    (error) => {
      this.datas = null;
      this.error = error;
    });
  }

  ngOnInit(){}
}
