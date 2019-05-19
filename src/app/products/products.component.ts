import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private cartCount: CartCountService,
    private finalCart: CartService) { }

  productArr: {
    path: string,
    name: string,
    price: string,
    status: boolean
  }[];

  // golbal count 
  count = 0;

  str;

  ngOnInit() {
    this.productArr = this.cartCount.products
    console.log(this.productArr);
    // if (localStorage.getItem("DataCount") === null) {
    //   localStorage.setItem("DataCount", "0")
    //   this.cartCount.count = JSON.parse(localStorage.getItem("DataCount"))
    // }
    // else {
    //   this.cartCount.count = JSON.parse(localStorage.getItem("DataCount"))
    //   console.log(this.cartCount.count)
    //   this.cartCount.changeMsg(this.cartCount.count)
    // }
  }

  onCheckCart(prod) {
    console.log(prod);
    prod.count++;
    prod.quantity++;
    console.log(prod.quantity)
    this.count++;
    this.cartCount.count++;
    this.cartCount.changeMsg(this.cartCount.count);
    if (this.finalCart.cartlist.filter(cart => cart.id == prod.id).length == 0) {
      this.finalCart.cartlist.push(prod);
      let x = JSON.stringify(this.finalCart.cartlist)
      localStorage.setItem('data', x)
    }
    if (prod.status == false) {
      prod.status = true;
    }
    // this.str = "" + this.count;
    // localStorage.setItem("DataCount", this.str)
  }


  prodDetail(product) {
    this.finalCart.displayProd = product;
    console.log(product)
  }

}

