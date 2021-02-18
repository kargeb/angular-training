import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';
import { HeroesModule } from './heroes/heroes.module';
import { MessagesComponent } from './messages/messages.component';
import { PmModule } from './plural/pm/pm.module';

// import { HeroesComponent } from './heores/heroes/heroes.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, NavComponent, MessagesComponent],
  imports: [
    ShopModule,
    BrowserModule,
    HttpClientModule,
    HeroesModule,
    PmModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
