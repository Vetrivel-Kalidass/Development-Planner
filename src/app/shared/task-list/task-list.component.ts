import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  indexExpanded: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  togglePanels(index: number) {
      this.indexExpanded = index == this.indexExpanded ? -1 : index;
  }

}
