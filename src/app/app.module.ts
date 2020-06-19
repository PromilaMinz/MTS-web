import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from 'ngx-icons';

import { OrdersComponent } from './orders/orders.component';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutModule } from './layouts/home-layout/home-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    // AdminLayoutComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    AdminLayoutModule,
    HomeLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
