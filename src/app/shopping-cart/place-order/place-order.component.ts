import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  orderCheckout(): void {
    this.cartService.checkoutFromCart();
  }

}
