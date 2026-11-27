import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { TaskList } from './task-list/task-list';

@Component({
  imports: [Counter, TaskList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('CI/CD con Angular - Version 2');
}
