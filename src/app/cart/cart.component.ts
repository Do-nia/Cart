import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartCountService,
    private finalCart: CartService) {

  }

  displayCart: any[];
  str;

  ngOnInit() {
    this.displayCart = this.finalCart.cartlist;

  }

  onDeleteCart(cart) {
    this.displayCart = this.displayCart.filter(item => item.id !== cart.id)
    cart.status = false;
    // alert(cart.quantity)
    if (cart.quantity > 1) {
      this.cart.changeMsg(this.cart.count - cart.quantity)
      this.cart.count = this.cart.count - cart.quantity;
      // alert(this.cart.count+""+cart.quantity)

    } else {
      this.cart.changeMsg(--cart.count)
    }
    this.finalCart.cartlist = this.displayCart;
    let updated = JSON.stringify(this.displayCart)
    localStorage.setItem('data', updated)

  }

  onIncreaseCart(cart) {
    this.cart.count++;
    cart.quantity++;
    this.cart.changeMsg(this.cart.count);
  }

  onDecreaseCart(cart) {
    if (this.cart.count > 0) {
      this.cart.count--
      cart.quantity--
      this.cart.changeMsg(this.cart.count);
      // let updatedCount = "" + this.cart.count;
      // localStorage.setItem("DataCount", updatedCount )
    }
    if (cart.quantity < 1) {
      // this.onDeleteCart(cart);
      this.displayCart = this.displayCart.filter(item => item.id !== cart.id)
      this.cart.changeMsg(cart.quantity)
      this.finalCart.cartlist = this.displayCart;
      let updated = JSON.stringify(this.displayCart)
      localStorage.setItem('data', updated)
      cart.status = false;
      // this.str = "" + this.cart.count;
      // localStorage.setItem("DataCount", this.str)

    }

  }
}
