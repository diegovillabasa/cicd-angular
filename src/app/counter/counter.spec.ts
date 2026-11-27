import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {
  let fixture: ComponentFixture<Counter>;
  let el: HTMLElement;
  const click = (sel: string) => {
    (el.querySelector(sel) as HTMLButtonElement).click();
    fixture.detectChanges();
  };
  const value = () => el.querySelector('.value')?.textContent?.trim();

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Counter] }).compileComponents();
    fixture = TestBed.createComponent(Counter);
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('empieza en 0', () => {
    expect(value()).toBe('99');
  });

  it('incrementa al pulsar +', () => {
    click('.inc');
    click('.inc');
    expect(value()).toBe('2');
  });

  it('decrementa pero nunca baja de 0', () => {
    click('.inc');
    click('.dec');
    click('.dec');
    expect(value()).toBe('99');
  });
});
