import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartCountService } from '../cart-count.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private detailsOfProd: CartService,
    private cartCount: CartCountService) {
  }
  str;
  prodDetails;
  ngOnInit() {
    this.prodDetails = this.detailsOfProd.displayProd;
    console.log(this.prodDetails);
  }

  onCheckCart(prod) {
    console.log(prod);
    this.cartCount.count++;
    prod.quantity++;
    this.cartCount.changeMsg(this.cartCount.count);
    if (this.detailsOfProd.cartlist.filter(cart => cart.id == prod.id).length == 0) {

      this.detailsOfProd.cartlist.push(prod);
      console.log(this.detailsOfProd.cartlist)
      let x = JSON.stringify(this.detailsOfProd.cartlist)
      localStorage.setItem('data', x)
    }
    if(prod.status == false){
      prod.status = true;
    }
    this.str = "" + this.cartCount.count;
    localStorage.setItem("DataCount", this.str)
  }

}
