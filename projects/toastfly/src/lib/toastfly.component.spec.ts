import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastflyComponent } from './toastfly.component';

describe('ToastflyComponent', () => {
  let component: ToastflyComponent;
  let fixture: ComponentFixture<ToastflyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
