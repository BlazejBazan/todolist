import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { MessageService } from './message.service';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private messageService: MessageService) { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    this.messageService.add('TaskService: pobranie zadań');
    return tasks;
  }

  getTask(id: number): Observable<Task> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const task = TASKS.find(task => task.id === id)!;
    this.messageService.add(`TaskService: pobrano zadanie id=${id}`);
    return of(task);
  }
}
