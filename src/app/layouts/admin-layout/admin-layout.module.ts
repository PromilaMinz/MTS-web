import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    SidebarModule,
    NavbarModule
  ]
})
export class AdminLayoutModule { }
