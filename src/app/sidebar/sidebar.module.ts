import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from 'ngx-icons';

import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
