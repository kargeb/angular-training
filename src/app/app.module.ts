import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, NavComponent],
  imports: [
    ShopModule,
    // ReactiveFormsModule,
    // FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
