import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addItems(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }
  getItems() {
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  clearCart() {
    // emptying the cart items
    this.items = [];
    return this.items;
  }
}
