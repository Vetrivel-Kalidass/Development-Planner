import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniNavbarComponent } from './mini-navbar/mini-navbar.component';
import { MaterialModule } from '../material/material.module';
import { TaskListComponent } from './task-list/task-list.component';
import { MainActionsMenuComponent } from './main-actions-menu/main-actions-menu.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';



@NgModule({
  declarations: [
    MiniNavbarComponent,
    TaskListComponent,
    MainActionsMenuComponent,
    CreateTaskComponent,
    CreateTagComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    MiniNavbarComponent,
    TaskListComponent,
    MainActionsMenuComponent,
    CreateTaskComponent,
    NoteListComponent
  ]
})
export class SharedModule { }
