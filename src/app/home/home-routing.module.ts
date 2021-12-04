import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: 'work-list', loadChildren: () => import('./work-list/work-list.module').then(m => m.WorkListModule) },
      { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },
      { path: '', pathMatch: 'full', redirectTo: 'work-list' },
      { path: '**', redirectTo: 'work-list' }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
