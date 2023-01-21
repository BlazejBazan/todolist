import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Task[] {
    this.messageService.add('TaskService: pobranie zadań');
    return TASKS;
  };

  constructor(private messageService: MessageService) { }
}
