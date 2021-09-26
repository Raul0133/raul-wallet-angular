import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RaulCurrencyComponent } from './components/raul-currency/raul-currency.component';
import { RaulWalletComponent } from './components/raul-wallet/raul-wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    RaulCurrencyComponent,
    RaulWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
