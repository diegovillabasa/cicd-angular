import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskList } from './task-list';

describe('TaskList', () => {
  let fixture: ComponentFixture<TaskList>;
  let el: HTMLElement;

  const type = (text: string) => {
    const input = el.querySelector('input') as HTMLInputElement;
    input.value = text;
    (el.querySelector('button.add') as HTMLButtonElement).click();
    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TaskList] }).compileComponents();
    fixture = TestBed.createComponent(TaskList);
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('pinta una tarea nueva al pulsar Añadir y vacía el input', () => {
    type('Hacer la práctica');
    expect(el.querySelectorAll('li').length).toBe(1);
    expect(el.querySelector('li .title')?.textContent).toContain('Hacer la práctica');
    expect((el.querySelector('input') as HTMLInputElement).value).toBe('');
  });

  it('no añade tareas vacías', () => {
    type('   ');
    expect(el.querySelectorAll('li').length).toBe(0);
  });

  it('marca como hecha al hacer clic y actualiza el contador', () => {
    type('A');
    (el.querySelector('.title') as HTMLElement).click();
    fixture.detectChanges();
    expect(el.querySelector('li')?.classList).toContain('done');
    expect(el.querySelector('.pending')?.textContent).toContain('0');
  });

  it('elimina la tarea con el botón ✕', () => {
    type('A');
    (el.querySelector('button.remove') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(el.querySelectorAll('li').length).toBe(0);
  });
});
