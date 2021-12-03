import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TaskItem {
  id?: number;
  title: string;
  description?: string;
  date: string;
  completed: boolean;
}

export enum AppValues {
  tasks = "tasks",
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private _allTasks: BehaviorSubject<TaskItem[] | null | undefined> = new BehaviorSubject<TaskItem[] | null | undefined>(null);

  constructor() {}

  get allTasks(): Observable<TaskItem[] | null | undefined> {
    if (!this._allTasks.value) {
      this.setAllTasks();
    }
    return this._allTasks;
  }

  private setAllTasks() {
    this._allTasks.next(this.getLocalItem(AppValues.tasks));
  }

  createTask(newTask: TaskItem) {
    const currentTasks: TaskItem[] = this.getLocalItem(AppValues.tasks);
    let noOfTasks: number | null = currentTasks?.length;

    const newTasks: TaskItem[] = noOfTasks ? [ ...currentTasks, {  id: noOfTasks + 1, ...newTask } ] : [ { id: 1, ...newTask } ];
    this.setLocalItem(AppValues.tasks, newTasks);
    this.setAllTasks();
  }

  editTask(modifiedTask: TaskItem) {
    const currentTasks: TaskItem[] = this.getLocalItem(AppValues.tasks);
    let index = currentTasks.findIndex(t => t.id === modifiedTask.id);

    const newTasks: TaskItem[] = currentTasks?.length > 1 ? [
      ...currentTasks.slice(0, index),
      modifiedTask,
      ...currentTasks.slice(index + 1)
    ] : [ modifiedTask ];
    this.setLocalItem(AppValues.tasks, newTasks);
    this.setAllTasks();
  }

  deleteTask(task: TaskItem) {
    const currentTasks: TaskItem[] = this.getLocalItem(AppValues.tasks);

    const newTasks: TaskItem[] = currentTasks.filter(t => t.id !== task.id);
    this.setLocalItem(AppValues.tasks, newTasks);
    this.setAllTasks();
  }



  /**LOCAL STORAGE SERVICES */
  setLocalItem(name: string, value: any): void {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getLocalItem(name: string): any {
    try {
      let stringifiedData: string | null = localStorage.getItem(name);
      return stringifiedData ? JSON.parse(stringifiedData) : null;
    }
    catch(e) {
      return null;
    }
  }

  removeLocalItem(name: string): void {
    localStorage.removeItem(name);
  }

  clearAllLocalItems(): void {
    localStorage.clear();
  }

}
