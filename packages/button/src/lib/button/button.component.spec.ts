import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgpButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: NgpButtonComponent;
  let fixture: ComponentFixture<NgpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgpButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
