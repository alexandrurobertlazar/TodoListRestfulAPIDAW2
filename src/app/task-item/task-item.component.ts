import { TaskService } from './../services/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  @Output() taskDeleted = new EventEmitter();
  formattedDate: string = "";
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.formattedDate = dayjs(this.task.date).format('DD/MM/YYYY');
  }

  deleteTask(): void {
    this.taskService.deleteData(this.task.id)
    this.taskDeleted.emit();
  }

  showTaskDetails() {
    this.router.navigate(['/task-detail/' + this.task.id])
  }
}
