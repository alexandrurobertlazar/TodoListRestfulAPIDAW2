import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './task-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailRoutingModule } from './task-detail.routing.module';



@NgModule({
  declarations: [TaskDetailComponent],
  imports: [
    CommonModule,
    TaskDetailRoutingModule,
    FormsModule
  ]
})
export class TaskDetailModule { }
