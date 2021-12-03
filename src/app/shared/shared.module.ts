import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniNavbarComponent } from './mini-navbar/mini-navbar.component';
import { MaterialModule } from '../material/material.module';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    MiniNavbarComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MiniNavbarComponent,
    TaskListComponent
  ]
})
export class SharedModule { }
