import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
