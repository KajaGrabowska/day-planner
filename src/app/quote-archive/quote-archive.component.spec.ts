import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { QuoteArchiveComponent } from './quote-archive.component';
import { FormsModule } from '@angular/forms';

describe('QuoteArchiveComponent', () => {
  let component: QuoteArchiveComponent;
  let fixture: ComponentFixture<QuoteArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteArchiveComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
