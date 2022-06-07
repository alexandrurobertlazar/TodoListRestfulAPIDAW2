import { Task, TaskStoreable } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:8000/api/"
  constructor(private httpClient: HttpClient) {
  }

  addData(value: any) {
    return this.httpClient.post(this.apiUrl + 'tasks', value);
  }

  getData() {
    return this.httpClient.get(this.apiUrl + 'tasks');
  }

  updateData(id: string, taskData: Task) {
    return this.httpClient.put(this.apiUrl + 'tasks/' + id, taskData);
  }

  deleteData(id: string) {
    return this.httpClient.delete(this.apiUrl + 'tasks/' + id);
  }

  getTaskById(id: string) {
    return this.httpClient.get(this.apiUrl + 'tasks/' + id);
  }
}
