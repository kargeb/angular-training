import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'pm/products', component: ProductListComponent },
      {
        path: 'pm/products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
