import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StarComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [StarComponent, CommonModule, FormsModule, NavComponent],
})
export class SharedModule {}
