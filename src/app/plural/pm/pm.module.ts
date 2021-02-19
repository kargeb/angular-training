import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmComponent } from './pm.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [PmComponent],
  imports: [
    CommonModule,

    SharedModule,
    ProductsModule,
    RouterModule.forChild([
      { path: 'pm/welcome', component: PmComponent },
      { path: 'pm', redirectTo: 'pm/welcome', pathMatch: 'full' },
    ]),
  ],
})
export class PmModule {}
