import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkListRoutingModule } from './work-list-routing.module';
import { WorkListComponent } from './work-list.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    WorkListComponent
  ],
  imports: [
    CommonModule,
    WorkListRoutingModule,
    MaterialModule
  ]
})
export class WorkListModule { }
