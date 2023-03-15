import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  cartNumber!:number
  constructor(private order:OrdersService){
    this.cartNumber = order.cartNumber
  }
  
}
