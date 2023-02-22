import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // Declaration
  // Product is an interface
  // products is an array of objects
  product : Product | undefined;

  constructor(private route: ActivatedRoute,private cart:CartService) {}
  ngOnInit()
  {
    const routeParam = this.route.snapshot.paramMap;
    const getProductId = Number(routeParam.get('productId'));
    this.product = products.find(product => product.id === getProductId);
    console.log(this.product);
  }
  addToCart(product:Product)
  {
    this.cart.addItems(product)
    // This alert function is added for testing purpose only
    alert('product has been added successfully');
  }

}
