import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteService } from 'src/app/core/note.service';
import { TagService } from 'src/app/core/tag.service';
import { NoteItem, TagItem } from 'src/app/models';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  allNotes$: Observable<NoteItem[] | null | undefined>;
  allTags$: Observable<TagItem[] | null | undefined>;

  constructor(
    private _noteService: NoteService,
    private _tagService: TagService
  ) { 
    this.allNotes$ = this._noteService.allNotes;
    this.allTags$ = this._tagService.allTags;
  }

  ngOnInit(): void {
  }

}
