import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() product: Product;
  subscription: Subscription;

  constructor(private cartService: CartService) {
    this.subscription = cartService.addedProduct$.subscribe(
      selectedProduct => {
        this.product = selectedProduct;
      });
  }

  ngOnInit(): void {
  }

  addProductToCart(selectedProduct: Product): void {
    this.cartService.addProductToCart(selectedProduct);
  }

}
