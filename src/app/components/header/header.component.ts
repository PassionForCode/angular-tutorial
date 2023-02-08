import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  private subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    // subscribe to the onToggleMethod of uiService, that holds whether the AddTaskForm should be visible. Changes color and text of toggle Button
    this.subscription = this.uiService.addTaskVisible().subscribe(value => (this.showAddTask = value));
  }

  toggleAddTask() {
    console.log('toggleAddTask');
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
