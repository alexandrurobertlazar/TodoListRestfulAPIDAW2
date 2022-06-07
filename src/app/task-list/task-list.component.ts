import { TaskStoreable } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasksList: any[] = [];
  showAddNewTask: boolean = false;
  taskInForm: TaskStoreable = {
    name: '',
    description: '',
    status: false,
    date: dayjs(Date.now()).format('YYYY-MM-DD'),
  };
  constructor(public taskService: TaskService) { }

  async ngOnInit() {
    await this.getTasksList();
  }

  toggleShowAddNewTask() {
    this.showAddNewTask = !this.showAddNewTask;
  }

  async sendNewTask() {
    this.taskService.addData(this.taskInForm).subscribe(async _ => {
      await this.getTasksList();
    });
  }

  async getTasksList() {
    const resp = await this.taskService.getData().subscribe((data: any) => {
      this.tasksList = data.tasks
    });
  }

  emptyTaskForm() {
    this.taskInForm = {
      name: '',
      description: '',
      status: false,
      date: dayjs(Date.now()).format('YYYY-MM-DD'),
    }
  }

}
