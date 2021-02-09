import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { TaskProgressComponent } from './task-progress.component';
import { FormsModule } from '@angular/forms';

describe('TaskProgressComponent', () => {
  let component: TaskProgressComponent;
  let fixture: ComponentFixture<TaskProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskProgressComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
