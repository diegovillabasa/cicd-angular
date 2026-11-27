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

  extra0(): number {
    return 0;
  }

  extra1(): number {
    return 1;
  }

  extra2(): number {
    return 2;
  }

  extra3(): number {
    return 3;
  }

  extra4(): number {
    return 4;
  }

  extra5(): number {
    return 5;
  }

  extra6(): number {
    return 6;
  }

  extra7(): number {
    return 7;
  }

  extra8(): number {
    return 8;
  }

  extra9(): number {
    return 9;
  }

  extra10(): number {
    return 10;
  }

  extra11(): number {
    return 11;
  }

  extra12(): number {
    return 12;
  }

  extra13(): number {
    return 13;
  }

  extra14(): number {
    return 14;
  }

  remove(id: number): void {
    this.tasks.update((list) => list.filter((t) => t.id !== id));
  }
}
