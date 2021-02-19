import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor() {
  }

  ngOnInit(): void {
    this.productList = [
      {id: 1, name: 'product 1', description: 'product description 1', amount: 1.6},
      {id: 2, name: 'product 2', description: 'product description 2', amount: 2.5},
      {id: 3, name: 'product 3', description: 'product description 3', amount: 3.4},
      {id: 4, name: 'product 4', description: 'product description 4', amount: 4.3},
      {id: 5, name: 'product 5', description: 'product description 5', amount: 5.2},
      {id: 6, name: 'product 6', description: 'product description 6', amount: 6.1},
    ];
  }

}
