import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { CartComponent } from './header/cart/cart.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImageComponent } from './product-details/product-image/product-image.component';
import { ProductInfoComponent } from './product-details/product-info/product-info.component';
import { AddToCartComponent } from './product-details/add-to-cart/add-to-cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ItemListComponent } from './shopping-cart/item-list/item-list.component';
import { PlaceOrderComponent } from './shopping-cart/place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    CartComponent,
    LogoComponent,
    SearchComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductImageComponent,
    ProductInfoComponent,
    AddToCartComponent,
    ShoppingCartComponent,
    ItemListComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
