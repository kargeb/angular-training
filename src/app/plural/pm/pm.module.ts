import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmComponent } from './pm.component';
import { ProductListComponent } from './products/product-list/product-list.component';
// import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [PmComponent, NavComponent],
  imports: [
    CommonModule,

    RouterModule.forRoot([
      { path: 'pm/products', component: ProductListComponent },
      {
        path: 'pm/products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
      { path: 'pm/welcome', component: PmComponent },
      { path: 'pm', redirectTo: 'pm/welcome', pathMatch: 'full' },
    ]),
    ProductsModule,
  ],
})
export class PmModule {}
