import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CourseSummaryWidget } from './course-summary-widget';

describe('CourseSummaryWidget', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSummaryWidget],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CourseSummaryWidget);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
