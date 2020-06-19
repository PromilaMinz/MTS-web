import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutRoutes } from './home-layout.routing'



@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),

  ]
})
export class HomeLayoutModule { }
