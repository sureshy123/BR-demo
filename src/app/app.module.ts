import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { InternetsComponent } from './components/internets/internets.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    InternetsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
