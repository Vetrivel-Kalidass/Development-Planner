import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { NoteItem } from '../models';
import { AppValues } from '../shared/data';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class NoteService {

  private _allNotes: BehaviorSubject<NoteItem[] | null | undefined> = new BehaviorSubject<NoteItem[] | null | undefined>(null);

  constructor(
    private _localStorageService: LocalStorageService
  ) {}

  get allNotes(): Observable<NoteItem[] | null | undefined> {
    if (!this._allNotes.value) {
      this.setAllNotes();
    }
    return this._allNotes;
  }

  private setAllNotes() {
    this._allNotes.next(this._localStorageService.getLocalItem(AppValues.notes));
  }

  getNoteById(noteId: number): NoteItem | undefined {
    return this._allNotes.value?.find(note => note.id === noteId);
  }

  createNote(newNote: NoteItem) {
    const currentNotes: NoteItem[] = this._localStorageService.getLocalItem(AppValues.notes);
    let noOfNotes: number | null = currentNotes?.length;

    newNote = {
      ...newNote,
      id: noOfNotes ? noOfNotes + 1 : 1,
      createdAt: new Date().toISOString(),
    };
    const newNotes: NoteItem[] = noOfNotes ? [ ...currentNotes, newNote ] : [ newNote ];
    this._localStorageService.setLocalItem(AppValues.notes, newNotes);
    this.setAllNotes();
  }

  editNote(modifiedNote: NoteItem) {
    const currentNotes: NoteItem[] = this._localStorageService.getLocalItem(AppValues.notes);
    let index = currentNotes.findIndex(t => t.id === modifiedNote.id);

    const newNotes: NoteItem[] = currentNotes?.length > 1 ? [
      ...currentNotes.slice(0, index),
      modifiedNote,
      ...currentNotes.slice(index + 1)
    ] : [ modifiedNote ];
    this._localStorageService.setLocalItem(AppValues.notes, newNotes);
    this.setAllNotes();
  }

  deleteNote(note: NoteItem) {
    const currentNotes: NoteItem[] = this._localStorageService.getLocalItem(AppValues.notes);

    const newNotes: NoteItem[] = currentNotes.filter(t => t.id !== note.id);
    this._localStorageService.setLocalItem(AppValues.tasks, newNotes);
    this.setAllNotes();
  }

}
