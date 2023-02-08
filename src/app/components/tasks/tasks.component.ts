import { Component } from '@angular/core';
import { Task } from '../../mock.taks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  // Services/Injectables that are used in the component must be passed into the constructor method.
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // method that subscribes to the Observable that's returned when backend call is done.
  // Filters deleted task from component's state -> UI should get updated
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {

    console.log(`old reminder status ${task.reminder}`);

    this.taskService.toggleReminder(task).subscribe(() => {
      console.log('returning from toggleReminder');
      task.reminder = !task.reminder;
    });


  }

  addTask(task: Task) {
    console.log('Add Task in TaskComponent');
    this.taskService.addTask(task).subscribe((task) => {
      console.log('returning from taskService.addTask');
      this.tasks.push(task);
    });
  }
}
