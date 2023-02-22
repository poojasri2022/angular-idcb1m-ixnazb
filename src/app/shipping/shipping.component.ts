import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  constructor(private cartService: CartService) {}
  // Declaring response type
  shippingCosts!: Observable<{ type: String; price: number }[]>;
  ngOnInit(): void {
    // getShippingPrices() will call http get method to fetch data from external resources
    // this method returns the data to shippingCosts declared with response type
    this.shippingCosts = this.cartService.getShippingPrices();
    console.log(this.shippingCosts);
  }
}
