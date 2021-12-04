import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskServiceService } from 'src/app/core/task-service.service';
import { TaskItem } from 'src/app/models';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  @Input() allTasks: TaskItem[] | null | undefined;
  today!: string;

  indexExpanded: number = -1;

  constructor(
    private _taskService: TaskServiceService,
    private _matDialog: MatDialog
  ) {
    this.today = new Date().toLocaleDateString();
   }

  ngOnInit(): void {
  }

  togglePanels(index: number, description: string | undefined) {
    if (!description?.length) return;
    this.indexExpanded = index == this.indexExpanded ? -1 : index;
  }

  checkBoxChange(task: TaskItem) {
    this._taskService.editTask({ ...task, completed: !task.completed });
  }

  editTask(task: TaskItem) {
    const dialogRef = this._matDialog.open(CreateTaskComponent, { panelClass: "full-view-dialog", data: task });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  deleteTask(task: TaskItem) {
    this._taskService.deleteTask(task);
  }
  
  trackByFn(index: number, item: object): number { 
    return index; 
  }

}
