import { NgpVisuallyHiddenDirective } from './visually-hidden.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div ngpVisuallyHidden>Hidden content</div>',
})
class TestComponent {}

describe('NgpVisuallyHiddenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let div: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, NgpVisuallyHiddenDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    div = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new NgpVisuallyHiddenDirective(TestBed.inject(ElementRef));
    expect(directive).toBeTruthy();
  });

  it('should set the element style to visually hide the content', () => {
    const element = div.nativeElement as HTMLElement;
    const styles = element.style;

    expect(styles.position).toBe('absolute');
    expect(styles.border).toBe('0');
    expect(styles.width).toBe('1px');
    expect(styles.height).toBe('1px');
    expect(styles.padding).toBe('0');
    expect(styles.margin).toBe('-1px');
    expect(styles.overflow).toBe('hidden');
    expect(styles.clip).toBe('rect(0, 0, 0, 0)');
    expect(styles.whiteSpace).toBe('nowrap');
    expect(styles.wordWrap).toBe('normal');
    expect(styles.outline).toBe('none');
    expect(styles['-webkit-appearance']).toBe('none');
    expect(styles['-moz-appearance']).toBe('none');
    expect(styles.left).toBe('0');
  });
});
