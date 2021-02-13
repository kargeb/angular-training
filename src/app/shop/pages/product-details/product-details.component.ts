import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detailedProducts } from '../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log('productIdFromRoute', productIdFromRoute);

    this.product = detailedProducts.find(
      (product) => product.id === productIdFromRoute
    );
    console.log('znaleziony produtk: ', this.product);
  }
}
