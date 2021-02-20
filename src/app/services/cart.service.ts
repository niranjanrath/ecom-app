import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingItemList: Product[] = [];

  constructor() {
  }

  // Service message commands
  addProductToCart(product: Product): void {
    this.shoppingItemList.push(product);
  }

  removeProductFromCart(product: Product): void {
    const index: number = this.shoppingItemList.indexOf(product);
    if (index !== -1) {
      this.shoppingItemList.splice(index, 1);
    }
  }

  checkoutFromCart(): void {
    this.shoppingItemList.splice(0, this.shoppingItemList.length);
  }
}
