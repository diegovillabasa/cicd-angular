import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('muestra el título y los dos componentes hijos', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('CI/CD con Angular');
    expect(el.querySelector('app-counter')).toBeTruthy();
    expect(el.querySelector('app-task-list')).toBeTruthy();
  });
});
