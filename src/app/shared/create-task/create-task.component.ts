import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskServiceService } from 'src/app/core/task-service.service';
import { TaskItem } from 'src/app/models';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  selectedTaskItem: TaskItem | null | undefined;
  taskItemForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: TaskItem | null | undefined,
    private _matDialogRef: MatDialogRef<CreateTaskComponent>,
    private _formBuilder: FormBuilder,
    private _taskService: TaskServiceService
  ) {
    this.selectedTaskItem = this.data ? { ...this.data } : null;
    this.createTaskItemForm(this.selectedTaskItem);
   }

  ngOnInit(): void {
  }

  createTaskItemForm(taskItem: TaskItem | null = null) {
    this.taskItemForm = this._formBuilder.group({
      title: this._formBuilder.control(taskItem?.title),
      description: this._formBuilder.control(taskItem?.description),
      date: this._formBuilder.control(taskItem?.date),
      completed: this._formBuilder.control(taskItem?.completed)
    });
  }

  submitForm() {
    if (this.taskItemForm.invalid) return;
    if (!this.selectedTaskItem) {
      this._taskService.createTask(this.taskItemForm.value);
    }
    else {
      const modifiedTask: TaskItem = {
        ...this.selectedTaskItem,
        ...this.taskItemForm.value
      }
      this._taskService.editTask(modifiedTask);
    }
    this._matDialogRef.close();
  }

}
