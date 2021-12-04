import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { TagService } from './tag.service';
import { TaskServiceService } from './task-service.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    TaskServiceService,
    TagService
  ]
})
export class CoreModule { }
