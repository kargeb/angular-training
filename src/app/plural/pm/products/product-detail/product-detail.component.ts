import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product details: ';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.pageTitle += ` ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/pm/products']);
  }
}
