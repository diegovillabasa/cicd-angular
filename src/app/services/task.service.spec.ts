import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('añade una tarea y devuelve true', () => {
    expect(service.add('  Estudiar CI/CD  ')).toBe(true);
    expect(service.tasks()).toEqual([{ id: 1, title: 'Estudiar CI/CD', done: false }]);
  });

  it('rechaza títulos vacíos', () => {
    expect(service.add('   ')).toBe(false);
    expect(service.tasks().length).toBe(0);
  });

  it('marca y desmarca una tarea y actualiza las pendientes', () => {
    service.add('A');
    service.add('B');
    expect(service.pending()).toBe(2);
    service.toggle(1);
    expect(service.pending()).toBe(1);
    service.toggle(1);
    expect(service.pending()).toBe(2);
  });

  it('elimina una tarea por id', () => {
    service.add('A');
    service.add('B');
    service.remove(1);
    expect(service.tasks().map((t) => t.title)).toEqual(['B']);
  });
});
