import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaulCurrencyComponent } from './components/raul-currency/raul-currency.component';
import { RaulWalletComponent } from './components/raul-wallet/raul-wallet.component';

const routes: Routes = [
  { path: '', redirectTo: 'currency', pathMatch: 'full' },
  { path: 'currency', component: RaulCurrencyComponent },
  { path: 'wallet', component: RaulWalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
