import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  cartNumber!:number

  constructor() { 
    this.cartNumber = 0;
   }
   
}
