import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItem, TaskServiceService } from 'src/app/core/task-service.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  allTasks$: Observable<TaskItem[] | null | undefined>;

  constructor(
    private _taskService: TaskServiceService
  ) { 
    this.allTasks$ = this._taskService.allTasks;
  }


  ngOnInit(): void {
  }

}
