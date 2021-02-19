import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    NavComponent,
    ConvertToSpacesPipe,
    NavComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    NavComponent,
    ConvertToSpacesPipe,
  ],
})
export class SharedModule {}
