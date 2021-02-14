import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detailedProducts } from '../../products';
import { CartService } from './../../cart.service';
import { products } from './../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log('productIdFromRoute', productIdFromRoute);

    this.product = detailedProducts.find(
      (product) => product.id === productIdFromRoute
    );
    console.log('znaleziony produtk: ', this.product);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
