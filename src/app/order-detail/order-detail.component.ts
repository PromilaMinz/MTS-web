import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../orders';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }
  
  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('---id', id)
    this.orderService.getOrder(id)
      .subscribe(order => this.order = order);
  }
  goBack(): void {
    this.location.back();
  }

}
