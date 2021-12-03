import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniNavbarComponent } from './mini-navbar/mini-navbar.component';
import { MaterialModule } from '../material/material.module';
import { TaskListComponent } from './task-list/task-list.component';
import { MainActionsMenuComponent } from './main-actions-menu/main-actions-menu.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MiniNavbarComponent,
    TaskListComponent,
    MainActionsMenuComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MiniNavbarComponent,
    TaskListComponent,
    MainActionsMenuComponent,
    CreateTaskComponent
  ]
})
export class SharedModule { }
