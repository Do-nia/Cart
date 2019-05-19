import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartlist:any[];
  displayProd: any;

  constructor() {
   
    this.cartlist=JSON.parse(localStorage.getItem("data"))
    if(!this.cartlist){
      this.cartlist=[];
    }

  }

}
