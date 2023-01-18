import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  task = new Task(1, 'projekt CUDA', 'Normalny', 'Projekt Nvidia', true);

  constructor() { }

  ngOnInit(): void {
  }

}
