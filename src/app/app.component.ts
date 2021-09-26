import { Component, OnInit } from '@angular/core';
import { RaulWalletService } from './raul-wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  BRLAtual!: number
  BRLAnterior!: number
  BRLSubiu: any
  USDAtual!: number
  USDAnterior!: number
  USDSubiu!: any
  EURAtual!: number
  EURAnterior!: number
  EURSubiu!: any

  constructor(private raulWalletService: RaulWalletService) { }
  ngOnInit() {
    this.getBRLBitcoin()
    this.getUSDBitcoin()
    this.getEURBitcoin()

    this.interval()
  }

  getBRLBitcoin() {
    this.BRLAnterior = this.BRLAtual == this.BRLAnterior ? this.BRLAnterior : this.BRLAtual
    this.raulWalletService.getBRLBitcoin().subscribe((btc: any) => {
      this.BRLAtual = btc.bpi.BRL.rate_float
      if (this.BRLAnterior) {
        this.BRLAtual == this.BRLAnterior ? null : this.BRLSubiu = this.BRLAnterior > this.BRLAtual
      }
    })
  }

  getUSDBitcoin() {
    this.USDAnterior = this.USDAtual == this.USDAnterior ? this.USDAnterior : this.USDAtual
    this.raulWalletService.getUSDBitcoin().subscribe((btc: any) => {
      this.USDAtual = btc.bpi.USD.rate_float
      if (this.USDAnterior) {
        this.USDAtual == this.USDAnterior ? null : this.USDSubiu = this.USDAnterior > this.USDAtual
      }
    })
  }

  getEURBitcoin() {
    this.EURAnterior = this.EURAtual == this.EURAnterior ? this.EURAnterior : this.EURAtual
    this.raulWalletService.getEURBitcoin().subscribe((btc: any) => {
      this.EURAtual = btc.bpi.EUR.rate_float
      if (this.EURAnterior) {
        this.EURAtual == this.EURAnterior ? null : this.EURSubiu = this.EURAnterior > this.EURAtual
      }
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
