import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task!: Task;
  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  async ngOnInit() {
    let taskId = '';
    this.activatedRoute.params.subscribe((param) => {
      taskId = param['id'];
    })
    this.getTaskData(taskId).then((resp) => {
      this.task = resp
    });
  }

  async getTaskData(taskId: string) {
    const resp = await this.taskService.getTaskById(taskId);
    return resp;
  }

  goBack() {
    this.router.navigate(['']);
  }

  updateTask() {
    this.taskService.updateData(this.task.id, this.task);
  }

}
