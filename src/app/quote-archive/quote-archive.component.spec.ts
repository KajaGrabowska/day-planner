import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteArchiveComponent } from './quote-archive.component';

describe('QuoteArchiveComponent', () => {
  let component: QuoteArchiveComponent;
  let fixture: ComponentFixture<QuoteArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteArchiveComponent ]
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
