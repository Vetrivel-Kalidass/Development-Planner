import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskServiceService } from 'src/app/core/task-service.service';
import { TagItem } from 'src/app/models';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {

  selectedTagItem: TagItem | null | undefined;
  tagItemForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: TagItem | null | undefined,
    private _matDialogRef: MatDialogRef<CreateTagComponent>,
    private _formBuilder: FormBuilder,
    private _taskService: TaskServiceService
  ) {
    this.selectedTagItem = this.data ? { ...this.data } : null;
    this.createTagItemForm(this.selectedTagItem);
   }

  ngOnInit(): void {
  }

  createTagItemForm(tagItem: TagItem | null = null) {
    this.tagItemForm = this._formBuilder.group({
      title: this._formBuilder.control(tagItem?.title),
      description: this._formBuilder.control(tagItem?.description),
      color: this._formBuilder.control(tagItem?.color || "#000000"),
    });
  }

  submitForm() {
    if (this.tagItemForm.invalid) return;
    if (!this.selectedTagItem) {
      this._taskService.createTask(this.tagItemForm.value);
    }
    else {
      this._taskService.editTask(this.tagItemForm.value);
    }
    this._matDialogRef.close();
  }

  patchColor(e: any) {
    this.tagItemForm.patchValue({ color: e?.target?.value });
  }

}
