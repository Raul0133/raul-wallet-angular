import { Component, OnInit } from '@angular/core';
import { RaulWalletService } from './raul-wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  BRL: number = 0
  USD: number = 0
  EUR: number = 0

  constructor(private raulWalletService: RaulWalletService) { }
  ngOnInit() {
    this.getBRLBitcoin()
    this.getUSDBitcoin()
    this.getEURBitcoin()

    this.interval()
  }

  getBRLBitcoin() {
    this.raulWalletService.getBRLBitcoin().subscribe((btc: any) => {
      this.BRL = btc.bpi.BRL.rate_float
    })
  }

  getUSDBitcoin() {
    this.raulWalletService.getUSDBitcoin().subscribe((btc: any) => {
      this.USD = btc.bpi.USD.rate_float
    })
  }

  getEURBitcoin() {
    this.raulWalletService.getEURBitcoin().subscribe((btc: any) => {
      this.EUR = btc.bpi.EUR.rate_float
    })
  }

  interval() {
    setInterval(() => {
      this.getBRLBitcoin()
      this.getUSDBitcoin()
      this.getEURBitcoin()
    }, 60000)
  }
}
