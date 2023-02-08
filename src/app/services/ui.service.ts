import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/* Service that holds the state of the UI, so that several components can react to state changes */
export class UiService {

  private showAddTask: boolean = false;
  /* Multi-Client Observable. the subject allows the listening components to react on the state change */
  private subject = new Subject<any>();

  constructor() {
  }

  /* Method that's called by the frontend to trigger a state change.  */
  toggleAddTask(): void {
    console.log('UiService.toggleAddTask');
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  /* The method the components need to subscribe to, to listen to changes */
  addTaskVisible(): Observable<any> {
    return this.subject.asObservable();
  }
}
