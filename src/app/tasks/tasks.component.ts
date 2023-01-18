import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedTask?: Task;
  onSelect(task: Task): void {
    if (this.selectedTask == task) {
      this.selectedTask = undefined;
    } else {
      this.selectedTask = task;
    };
  }

}
