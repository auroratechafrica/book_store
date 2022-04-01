import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {DetailComponent} from "./components/detail/detail.component";

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'detail/:bookId', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
