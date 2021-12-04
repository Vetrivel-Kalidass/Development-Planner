import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskServiceService } from 'src/app/core/task-service.service';
import { TaskItem } from 'src/app/models';

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
