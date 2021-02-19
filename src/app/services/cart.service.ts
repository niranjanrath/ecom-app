import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingItemList: Product[] = [];

  // Observable sources
  private addedProductSource = new Subject<Product>();

  // Observable streams
  addedProduct$ = this.addedProductSource.asObservable();

  constructor() {
  }

  // Service message commands
  addProductToCart(product: Product): void {
    this.shoppingItemList.push(product);
    this.addedProductSource.next(product);
  }

  removeProductFromCart(product: Product): void {
    const index: number = this.shoppingItemList.indexOf(product);
    if (index !== -1) {
      this.shoppingItemList.splice(index, 1);
    }
  }
}
