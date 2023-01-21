import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksService: TaskService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  selectedTask?: Task;
  onSelect(task: Task): void {
    if (this.selectedTask == task) {
      this.selectedTask = undefined;
    } else {
      this.selectedTask = task;
    };
  }

  getTasks(): void {
    this.tasks = this.tasksService.getTasks();
  }

}
