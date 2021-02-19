import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private sub: Subscription; // pointer to subscription on Route
  currentProductId: number;
  currentProduct: Product;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: any) => {
      this.currentProductId = params.id;
    });

    this.currentProduct = {id: this.currentProductId, name: 'Product Name', description: 'Product Description', amount: 45};
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
