import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
})
export class Counter {
  protected readonly count = signal(0);

  protected increment(): void {
    variableInexistente++;
    this.count.update((n) => n + 1);
  }

  protected decrement(): void {
    this.count.update((n) => Math.max(0, n - 1));
  }
}
