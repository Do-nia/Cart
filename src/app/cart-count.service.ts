import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class CartCountService {
  private msgCount = new BehaviorSubject(0);
  currentMessage = this.msgCount.asObservable();
  
  changeMsg(msg: any){
    this.msgCount.next(msg)
  }
  
  constructor() { }

  displayCart:any;
  count=0;

  products= [
    {
      path: "../../assets/01.jpg",
      name: "Konafa Lotus Cake",
      price: "340 l.E",
      status:false,
      id:"1",
      count:0,
      quantity:0
    },
    {
      path: "../../assets/02.jpg",
      name: "Konafa Date & Cinnamon",
      price: "180 l.E",
      status:false,
      id:"2",
      count:0,
      quantity:0
    },
    {
      path: "../../assets/03.jpg",
      name: "konafa nabulsia",
      price: "245 l.E",
      status:false,
      id:"3",
      count:0,
      quantity:0
    },
    {
      path: "../../assets/04.jpg",
      name: "konafa manga",
      price: "270 l.E",
      status:false,
      id:"4",
      count:0,
      quantity:0
    },
    {
      path: "../../assets/05.jpg",
      name: "konafa popcorn",
      price: "240 l.E",
      status:false,
      id:"5",
      count:0,
      quantity:0
    },
    {
      path: "../../assets/06.jpg",
      name: "konafa cadbury",
      price: "340 l.E",
      status:false,
      id:"6",
      count:0,
      quantity:0
    }
  ]
 
}
