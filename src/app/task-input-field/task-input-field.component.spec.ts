import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { TaskInputFieldComponent } from './task-input-field.component';
import { FormsModule } from '@angular/forms';

describe('TaskInputFieldComponent', () => {
  let component: TaskInputFieldComponent;
  let fixture: ComponentFixture<TaskInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputFieldComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
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
