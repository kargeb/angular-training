import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';

@NgModule({
  declarations: [ShopComponent, ProductComponent, ProductListComponent, ProductAlertsComponent],
  imports: [CommonModule, ShopRoutingModule],
  exports: [ShopComponent],
})
export class ShopModule {}
