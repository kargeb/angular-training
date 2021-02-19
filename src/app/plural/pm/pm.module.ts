import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmComponent } from './pm.component';
import { RouterModule } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [PmComponent],
  imports: [
    CommonModule,

    RouterModule.forRoot([
      // { path: 'pm/products', component: ProductListComponent },
      // {
      //   path: 'pm/products/:id',
      //   canActivate: [ProductDetailGuard],
      //   component: ProductDetailComponent,
      // },
      { path: 'pm/welcome', component: PmComponent },
      { path: 'pm', redirectTo: 'pm/welcome', pathMatch: 'full' },
    ]),
    ProductsModule,
    SharedModule,
  ],
})
export class PmModule {}
