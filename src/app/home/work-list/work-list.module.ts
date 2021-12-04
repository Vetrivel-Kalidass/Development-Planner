import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkListRoutingModule } from './work-list-routing.module';
import { WorkListComponent } from './work-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    WorkListComponent
  ],
  imports: [
    CommonModule,
    WorkListRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ]
})
export class WorkListModule { }
