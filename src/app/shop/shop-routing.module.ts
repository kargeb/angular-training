import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

// RouterModule.forChild([
//   // {
//   //   path: 'shop',
//   //   component: ProductListComponent,
//   // },
//   {
//     path: 'shop/products/:productId',
//     component: ProductDetailsComponent,
//   },
//   {
//     path: 'shop/cart',
//     component: CartComponent,
//   },
//   {
//     path: 'shop/shipping',
//     component: ShippingComponent,
//   },
// ]),
