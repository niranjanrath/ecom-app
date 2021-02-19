import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingList: Product[] = [];

  constructor(private cartService: CartService) {
    // cartService.addedProduct$.subscribe(
    //   product => {
    //     this.shoppingList.push(product);
    //   });
    this.shoppingList = this.cartService.shoppingItemList;
  }

  ngOnInit(): void {
  }

}
