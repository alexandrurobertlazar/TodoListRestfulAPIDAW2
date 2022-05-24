import { Task, TaskStoreable } from './../models/task';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  DocumentReference
} from '@angular/fire/firestore'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private firestore: Firestore) {
  }

  addData(value: any) {
    const dbInstance = collection(this.firestore, 'tasks');
    addDoc(dbInstance, value)
      .then(() => {
        alert('Se ha añadido la tarea')
      })
      .catch((err: { message: any; }) => {
        alert(err.message)
      })
  }

  async getData(): Promise<Task[]> {
    const dbInstance = collection(this.firestore, 'tasks');
    let tasksList: any = [];
    const resp = await getDocs(dbInstance);
    if (resp.docs) {
      tasksList = [...resp.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
      return tasksList;
    }
    return [];
  }

  updateData(id: string, taskData: Task) {
    const dataToUpdate = doc(this.firestore, 'tasks', id);
    updateDoc(dataToUpdate, {
      name: taskData.name,
      description: taskData.description,
      status: taskData.status,
      date: taskData.date,
    })
      .then(() => {
        alert('Se ha actualizado la tarea');
        this.getData()
      })
      .catch((err: { message: any; }) => {
        alert(err.message)
      })
  }

  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'tasks', id);
    deleteDoc(dataToDelete)
    .then(() => {
      alert('Se ha borrado la tarea');
    })
    .catch((err: { message: any; }) => {
      alert(err.message)
    })
  }

  async getTaskById(id: string): Promise<Task> {
    const docRef: DocumentReference<unknown> = doc(this.firestore, 'tasks', id);
    const docData = await getDoc(docRef);
    let taskData: Task = Object.assign({id: id}, docData.data() as Task);
    return taskData;
  }
}
