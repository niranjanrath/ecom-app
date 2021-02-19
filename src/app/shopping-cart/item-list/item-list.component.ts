import {Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList: Product[] = [];
  sumTotal = 0;
  shippingTotal = 0;
  total = 0;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.itemList = this.cartService.shoppingItemList;
    this.itemList.forEach(item => this.sumTotal += item.amount);
    this.shippingTotal = this.sumTotal > 0 ? 6.95 : 0;
    this.total = this.sumTotal + this.shippingTotal;
  }

  removeProductFromCart(product: Product): void {
    this.sumTotal = 0;
    this.cartService.removeProductFromCart(product);
    this.itemList.forEach(item => this.sumTotal += item.amount);
    this.shippingTotal = this.sumTotal > 0 ? 6.95 : 0;
    this.total = this.sumTotal + this.shippingTotal;
  }
}
