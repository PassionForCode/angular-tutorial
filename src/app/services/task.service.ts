import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../mock.taks';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const delUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(delUrl);
  }

  toggleReminder(task: Task): Observable<Task> {
    const upUrl = `${this.apiUrl}/${task.id}`;
    const newTask = { ...task, reminder: !task.reminder };
    return this.http.put<Task>(upUrl, newTask, this.httpOptions);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, newTask);
  }
}
