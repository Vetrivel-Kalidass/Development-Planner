import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagService } from 'src/app/core/tag.service';
import { TaskServiceService } from 'src/app/core/task-service.service';
import { TagItem, TaskItem } from 'src/app/models';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  allTasks$: Observable<TaskItem[] | null | undefined>;
  allTags$: Observable<TagItem[] | null | undefined>;

  constructor(
    private _taskService: TaskServiceService,
    private _tagService: TagService
  ) { 
    this.allTasks$ = this._taskService.allTasks;
    this.allTags$ = this._tagService.allTags;
  }


  ngOnInit(): void {
  }

}
