import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputFieldComponent } from './task-input-field.component';

describe('TaskInputFieldComponent', () => {
  let component: TaskInputFieldComponent;
  let fixture: ComponentFixture<TaskInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
