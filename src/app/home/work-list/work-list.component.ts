import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { TagService } from 'src/app/core/tag.service';
import { TaskServiceService } from 'src/app/core/task-service.service';
import { TagItem, TaskItem } from 'src/app/models';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit, OnDestroy {

  allTasks: TaskItem[] | null | undefined;
  filteredTasks: TaskItem[] = [];
  allTags$: Observable<TagItem[] | null | undefined>;

  tasksSubs$: Subscription;

  constructor(
    private _taskService: TaskServiceService,
    private _tagService: TagService
  ) { 
    this.tasksSubs$ = this._taskService.allTasks.subscribe(tasks => {
      this.allTasks = tasks;
      this.filteredTasks = this.allTasks?.length ? this.allTasks : [];
    });
    this.allTags$ = this._tagService.allTags;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tasksSubs$.unsubscribe();
  }

  filterByCompleted() {
    if (!this.allTasks) return;
    this.filteredTasks = this.allTasks.filter(task => task.completed);
  }

  filterByInCompleted() {
    if (!this.allTasks) return;
    this.filteredTasks = this.allTasks.filter(task => !task.completed);
  }

  fetchTasks() {
    this.filteredTasks = this.allTasks?.length ? this.allTasks : [];
  }

}
