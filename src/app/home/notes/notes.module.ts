import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
  declarations: [
    NotesComponent,
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
