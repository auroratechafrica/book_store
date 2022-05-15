import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {ListComponent} from "./components/list/list.component";
import { DetailComponent } from './components/detail/detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { FetchComponent } from './components/fetch/fetch.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DetailComponent,
    FilterPipe,
    FooterComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

