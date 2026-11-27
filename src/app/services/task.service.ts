import { Injectable, signal, computed } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private nextId = 1;
  readonly tasks = signal<Task[]>([]);
  readonly pending = computed(() => this.tasks().filter((t) => !t.done).length);

  add(title: string): boolean {
    const clean = title.trim();
    if (!clean) return false;
    this.tasks.update((list) => [...list, { id: this.nextId++, title: clean, done: false }]);
    return true;
  }

  toggle(id: number): void {
    this.tasks.update((list) => list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  remove(id: number): void {
    this.tasks.update((list) => list.filter((t) => t.id !== id));
  }
}
