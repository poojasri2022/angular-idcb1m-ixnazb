import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  // Generating controls by using FormBuilder service
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  onSubmit() {
    this.cartService.clearCart();
    console.warn('Purchase has been completed', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  items = this.cartService.getItems();
  // If you refresh, items that are added to Cart will be erased
  // since it is not in db
  ngOnInit() {
    // you cannot give items here.
    // Because, you have given items in html component
    // This function is called when the component loads
    // const items = this.cartService.getItems();
    console.log(this.items);
  }
}
