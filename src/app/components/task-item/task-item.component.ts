import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../mock.taks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input()
  task: Task = { day: '', reminder: false, text: '' };
  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  onToggleReminderEmitter: EventEmitter<Task> = new EventEmitter<Task>();


  faTrash = faTrash;

  onDelete(task: Task) {
    console.log('onDelete', task);
    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: Task) {
    console.log('onToggleReminder', task);
    this.onToggleReminderEmitter.emit(task);
  }
}
