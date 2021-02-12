import { Component, OnInit } from '@angular/core';
import { products, productLevel } from '../../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = [...products];

  productLevel = productLevel;

  setProductLevel(price) {
    if (price < 10) {
      return this.productLevel.cheap;
    } else if (price >= 10 && price < 100) {
      return this.productLevel.average;
    } else {
      return this.productLevel.expensive;
    }
  }

  changePrice(product, value) {
    this.products.map((originalProduct) => {
      if (originalProduct.name === product.name) {
        originalProduct.price = value;
      }
    });
  }

  constructor() {}

  ngOnInit(): void {
    console.log(products);
  }
}
