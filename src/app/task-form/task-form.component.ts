import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {

  priority = ['Pilne', 'Ważne', 'Normalne', 'Mało ważne', 'Mało pilne'];
  task = new Task('Projekt CUDA', this.priority[2], 'Opis zadania utajniony', false);

  constructor() { }

  ngOnInit(): void {
  }

}
