import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task = {
    name: 'projekt CUDA',
    priority: 'Normalny',
    description: 'Projekt Nvidia',
    done: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
