import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.scss']
})
export class StockExchangeComponent implements OnInit {

  private apiUrl = 'https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,USDCAD,CADCHF,NZDCAD,GBPJPY,AUDUSD,BTCEUR,CADJPY,AUDJPY,AUDUSD,CHFJPY,EURAUD,EURCAD,EURJPY,GBPAUD&api_key=feHHOAGAv7TLYtJ0m17tRWU8JLiLY5yg';
  datas: any;

  constructor(private http: HttpClient) {
    this.getDevises();
  }

  getDevises(){
    this.datas = this.http.get(this.apiUrl);
  }

  ngOnInit() {
  }

}
