import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NoteService } from 'src/app/core/note.service';
import { TagService } from 'src/app/core/tag.service';
import { NoteItem, TagItem } from 'src/app/models';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {

  allNotes: NoteItem[] | null | undefined;
  filteredNotes: NoteItem[] = [];
  allTags$: Observable<TagItem[] | null | undefined>;

  searchInputValue: string = '';
  searchExpanded: boolean = false;
  notesSubs$!: Subscription;

  constructor(
    private _noteService: NoteService,
    private _tagService: TagService,
    private _router: Router
  ) { 
    this.fetchNotes();
    this.allTags$ = this._tagService.allTags;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.notesSubs$) this.notesSubs$.unsubscribe();
  }

  fetchNotes() {
    this.notesSubs$ = this._noteService.allNotes.subscribe(tasks => {
      this.allNotes = tasks;
      this.filteredNotes = this.allNotes?.length ? this.allNotes : [];
    });
  }

  createNote() {
    this._router.navigateByUrl('/home/notes/create');
  }

  searchNotesBtnEvent() {
    this.searchExpanded = !this.searchExpanded;
    this.searchNotes();
  }

  searchNotes() {
    if (!this.allNotes) return;
    this.filteredNotes = this.allNotes.filter(task => 
        task.title?.toLowerCase().includes(this.searchInputValue.toLowerCase()));
  }

}
