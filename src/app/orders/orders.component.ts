import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Order } from '../orders';
import { OrderService} from '../order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  getOrders(): void {
      this.orderService.getOrders()
          .subscribe(orders => this.orders = orders);
  }
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
      this.getOrders();
    }

}
