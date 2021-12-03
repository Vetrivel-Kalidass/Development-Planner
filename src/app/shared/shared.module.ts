import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniNavbarComponent } from './mini-navbar/mini-navbar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MiniNavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MiniNavbarComponent
  ]
})
export class SharedModule { }
