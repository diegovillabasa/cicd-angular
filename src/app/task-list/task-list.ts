import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
})
export class TaskList {
  protected readonly service = inject(TaskService);

  protected add(input: HTMLInputElement): void {
    if (this.service.add(input.value)) {
      input.value = '';
    }
  }
}
