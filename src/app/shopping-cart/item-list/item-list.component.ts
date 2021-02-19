import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList: Product[] = [];

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.itemList = this.cartService.shoppingItemList;
  }

  removeProductFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);
  }
}
