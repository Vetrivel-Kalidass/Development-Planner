import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteService } from 'src/app/core/note.service';
import { TagService } from 'src/app/core/tag.service';
import { CheckListItem, FormType, NoteItem, TagItem } from 'src/app/models';
import { AppValues } from 'src/app/shared/data';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  appValues = AppValues;
  formType: FormType = this.appValues.create;
  selectedNoteItem: NoteItem | null | undefined;
  noteItemForm!: FormGroup;
  checkLists: CheckListItem[] = [];
  allTags$!: Observable<TagItem[] | null | undefined>;
  currentCheckListDesc: string | null = null;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _noteService: NoteService,
    private _tagService: TagService,
  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['id']?.length) {
        this.selectedNoteItem = this._noteService.getNoteById(+params['id']);
        this.checkLists = this.selectedNoteItem?.checkList ? [ ...this.selectedNoteItem.checkList ] : [];
        this.formType = this.appValues.edit;
      }
      this.createNoteItemForm(this.selectedNoteItem);
    });
   }

  ngOnInit(): void {
    this.allTags$ = this._tagService.allTags;
  }

  changeCheckListItem(listItem: CheckListItem) {
    this.checkLists = this.checkLists.map(item => {
      if (item.id === listItem.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
  }

  createNoteItemForm(noteItem: NoteItem | null = null) {
    this.noteItemForm = this._formBuilder.group({
      title: this._formBuilder.control(noteItem?.title),
      description: this._formBuilder.control(noteItem?.description),
      tagId: this._formBuilder.control(noteItem?.tagId),
      checkListType: this._formBuilder.control(noteItem?.checkListType)
    });
  }

  get isCheckList(): boolean {
    return this.noteItemForm.get('checkListType')?.value;
  }

  addCheckList() {
    if (!this.currentCheckListDesc) return;

    const newList: CheckListItem = {
      id: this.checkLists?.length ? this.checkLists.length + 1 : 1,
      description: this.currentCheckListDesc,
      completed: false
    };
    this.checkLists?.push(newList);
    this.currentCheckListDesc = null;
  }

  submitForm() {
    if (this.noteItemForm.invalid) return;
    if (!this.selectedNoteItem) {
      const newTask: NoteItem = {
        ...this.noteItemForm.value,
        checkList: this.checkLists
      };
      this._noteService.createNote(newTask);
    }
    else {
      const modifiedNote: NoteItem = {
        ...this.selectedNoteItem,
        ...this.noteItemForm.value,
        checkList: this.checkLists
      }
      this._noteService.editNote(modifiedNote);
    }
    this._router.navigate(['/home/notes']);
  }

}
