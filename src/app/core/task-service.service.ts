import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskItem } from '../models';
import { AppValues } from '../shared/data';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TaskServiceService {

  private _allTasks: BehaviorSubject<TaskItem[] | null | undefined> = new BehaviorSubject<TaskItem[] | null | undefined>(null);

  constructor(
    private _localStorageService: LocalStorageService
  ) {}

  get allTasks(): Observable<TaskItem[] | null | undefined> {
    if (!this._allTasks.value) {
      this.setAllTasks();
    }
    return this._allTasks;
  }

  private setAllTasks() {
    this._allTasks.next(this._localStorageService.getLocalItem(AppValues.tasks));
  }

  createTask(newTask: TaskItem) {
    const currentTasks: TaskItem[] = this._localStorageService.getLocalItem(AppValues.tasks) || [];
    let noOfTasks: number | null = currentTasks?.length;
    let uId: number = this._localStorageService.generateUId();
    if (currentTasks.find(task => task.id === uId)) uId = this._localStorageService.generateUId();

    newTask = {
      ...newTask,
      id: uId,
      createdAt: new Date().toISOString(),
    };
    const newTasks: TaskItem[] = noOfTasks ? [ ...currentTasks, newTask ] : [ newTask ];
    this._localStorageService.setLocalItem(AppValues.tasks, newTasks);
    this.setAllTasks();
  }

  editTask(modifiedTask: TaskItem) {
    const currentTasks: TaskItem[] = this._localStorageService.getLocalItem(AppValues.tasks);
    let index = currentTasks.findIndex(t => t.id === modifiedTask.id);

    const newTasks: TaskItem[] = currentTasks?.length > 1 ? [
      ...currentTasks.slice(0, index),
      modifiedTask,
      ...currentTasks.slice(index + 1)
    ] : [ modifiedTask ];
    this._localStorageService.setLocalItem(AppValues.tasks, newTasks);
    this.setAllTasks();
  }

  deleteTask(task: TaskItem) {
    const currentTasks: TaskItem[] = this._localStorageService.getLocalItem(AppValues.tasks);

    const newTasks: TaskItem[] = currentTasks.filter(t => t.id !== task.id);
    this._localStorageService.setLocalItem(AppValues.tasks, newTasks);
    this.setAllTasks();
  }


}
