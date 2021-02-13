import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    CommonModule,
    // ShopRoutingModule,
    RouterModule.forChild([
      {
        path: 'shop',
        component: ProductListComponent,
      },
      {
        path: 'shop/products/:productId',
        component: ProductDetailsComponent,
      },
      {
        path: 'shop/cart',
        component: CartComponent,
      },
      {
        path: 'shop/shipping',
        component: ShippingComponent,
      },
    ]),
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
