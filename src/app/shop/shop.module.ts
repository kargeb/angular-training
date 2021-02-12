import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ShopComponent, ProductComponent],
  imports: [CommonModule, ShopRoutingModule],
  exports: [ShopComponent],
})
export class ShopModule {}
