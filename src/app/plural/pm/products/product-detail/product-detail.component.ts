import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product details: ';
  product: IProduct;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += ` ${id}`;

    this.productService.getSingleProduct(id).subscribe({
      next: (product) => {
        this.product = product;
        console.log('pobrany product z url: ', this.product);
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/pm/products']);
  }
}
