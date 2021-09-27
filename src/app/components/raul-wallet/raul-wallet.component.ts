import { Component, OnInit } from '@angular/core';
import { RaulWalletService } from 'src/app/raul-wallet.service';

@Component({
  selector: 'app-raul-wallet',
  templateUrl: './raul-wallet.component.html',
  styleUrls: ['./raul-wallet.component.css']
})
export class RaulWalletComponent implements OnInit {
  BRLAtual!: number
  USDAtual!: number
  EURAtual!: number
  valor!: number

  constructor(private raulWalletService: RaulWalletService) { }

  ngOnInit(): void {
    this.getBRLBitcoin()
    this.getUSDBitcoin()
    this.getEURBitcoin()
  }

  getBRLBitcoin() {
    this.raulWalletService.getBRLBitcoin().subscribe((btc: any) => {
      this.BRLAtual = btc.bpi.BRL.rate_float
    })
  }

  getUSDBitcoin() {
    this.raulWalletService.getUSDBitcoin().subscribe((btc: any) => {
      this.USDAtual = btc.bpi.USD.rate_float
    })
  }

  getEURBitcoin() {
    this.raulWalletService.getEURBitcoin().subscribe((btc: any) => {
      this.EURAtual = btc.bpi.EUR.rate_float
    })
  }

  somarCarteira() {
    this.BRLAtual += this.valor
    this.USDAtual += (this.valor * 5.39)
    this.EURAtual += (this.valor * 6.31)
  }

  subtrairCarteira() {
    this.BRLAtual -= this.valor
    this.USDAtual -= (this.valor * 5.39)
    this.EURAtual -= (this.valor * 6.31)
  }

}
