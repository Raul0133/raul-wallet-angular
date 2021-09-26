import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaulWalletService {

  //http://api.coindesk.com/v1/bpi/currentprice.json
  //http://api.coindesk.com/v1/bpi/currentprice/BRL.json
  //http://api.coindesk.com/v1/bpi/currentprice/EUR.json
  //https://api.coindesk.com/v1/bpi/currentprice/USD.json

  constructor(private http: HttpClient) { }
}
