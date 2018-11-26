import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-api-devise',
  templateUrl: './api-devise.component.html',
  styleUrls: ['./api-devise.component.scss']
})
export class ApiDeviseComponent implements OnInit {

  constructor(private http: Http) {
    console.log('Hello fellow user');
  }

  ngOnInit(){}
}
