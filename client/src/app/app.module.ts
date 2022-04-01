import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {ListComponent} from "./components/list/list.component";
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailComponent } from './components/detail/detail.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CheckoutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

