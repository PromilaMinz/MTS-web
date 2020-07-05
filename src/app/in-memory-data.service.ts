import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './orders'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      { orderId: 1, customerName: 'Promila', id: 1},
      { orderId: 2, customerName: 'Jonathan', id: 2},
      { orderId: 3, customerName: 'Baiju', id: 3 },
      { orderId: 4, customerName: 'Nirmala', id: 4 },
      { orderId: 5, customerName: 'Shankar', id: 5 },
      { orderId: 6, customerName: 'Ramiya', id: 6 },
      { orderId: 7, customerName: 'Kamla', id: 7 },
     ];
    return {orders};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(orders: Order[]): number {
    return orders.length > 0 ? Math.max(...orders.map(order => order.orderId)) + 1 : 1;
  }
}