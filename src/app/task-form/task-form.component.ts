import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { PRIORITY } from '../priority-dictionary'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {

  priority = PRIORITY;
  task = new Task(2, 'Projekt CUDA', PRIORITY[2], 'Opis zadania utajniony', false);

  constructor() { }

  ngOnInit(): void {
  }

}
