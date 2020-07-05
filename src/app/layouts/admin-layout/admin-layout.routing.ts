import { Routes } from '@angular/router';


import { DashboardComponent } from '../../dashboard/dashboard.component';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { OrderDetailComponent } from 'src/app/order-detail/order-detail.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'orders/:id', component: OrderDetailComponent },

];