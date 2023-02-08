import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../mock.taks';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text!: string;
  day!: string;
  reminder!: boolean;
  hidden: boolean = true;

  @Output()
  onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  private subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.addTaskVisible().subscribe(addTaskvisible => (this.hidden = !addTaskvisible));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add text');
      return;
    }

    const newTask = {
      text: this.text,
      reminder: this.reminder,
      day: this.day,
    };

    this.onAddTask.emit(newTask);

    // clear
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
