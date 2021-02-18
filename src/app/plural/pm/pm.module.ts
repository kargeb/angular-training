import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmComponent } from './pm.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
    PmComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
  ],
  imports: [CommonModule, FormsModule],
})
export class PmModule {}
