import { Component, Input } from '@angular/core';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../mock.taks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input()
  task!: Task;

  faCoffee = faCoffee;
  faTrash = faTrash;

}
