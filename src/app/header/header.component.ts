import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../cart-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count: number;
  constructor(private cartCount: CartCountService) { }

  ngOnInit() {
    this.cartCount.currentMessage.subscribe(message => {
      this.count = message;
  });
  }
}
