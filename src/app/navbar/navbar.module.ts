import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from 'ngx-icons';

import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
