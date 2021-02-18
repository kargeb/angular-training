import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
