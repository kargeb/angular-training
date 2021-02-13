import { Component, OnInit } from '@angular/core';
import { detailedProducts } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = detailedProducts;

  constructor() {}

  share() {
    window.alert('Products has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {}
}
