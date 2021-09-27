import { Component, OnInit } from '@angular/core';
import { RaulWalletService } from 'src/app/raul-wallet.service';

@Component({
  selector: 'app-raul-currency',
  templateUrl: './raul-currency.component.html',
  styleUrls: ['./raul-currency.component.css']
})
export class RaulCurrencyComponent implements OnInit {
  BRLAtual!: number
  USDAtual!: number
  EURAtual!: number
  historicoBRL: number[] = []
  historicoUSD: number[] = []
  historicoEUR: number[] = []

  constructor(private raulWalletService: RaulWalletService) { }

  ngOnInit(): void {
    this.getBRLBitcoin()
    this.getUSDBitcoin()
    this.getEURBitcoin()

    this.interval()
  }

  getBRLBitcoin() {
    this.raulWalletService.getBRLBitcoin().subscribe((btc: any) => {
      this.BRLAtual = btc.bpi.BRL.rate_float
      this.historicoBRL.push(this.BRLAtual)
    })
  }

  getUSDBitcoin() {
    this.raulWalletService.getUSDBitcoin().subscribe((btc: any) => {
      this.USDAtual = btc.bpi.USD.rate_float
      this.historicoUSD.push(this.USDAtual)
    })
  }

  getEURBitcoin() {
    this.raulWalletService.getEURBitcoin().subscribe((btc: any) => {
      this.EURAtual = btc.bpi.EUR.rate_float
      this.historicoEUR.push(this.EURAtual)
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
