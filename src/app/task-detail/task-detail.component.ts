import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService} from "../task.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { PRIORITY } from '../priority-dictionary';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task | undefined;
  priority = PRIORITY;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

}
