import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Order } from '../orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order: Order = {
    orderId: 1,
    customerName: 'Promila'
  };

  constructor() { 
  }

  ngOnInit(): void {
  }

}
