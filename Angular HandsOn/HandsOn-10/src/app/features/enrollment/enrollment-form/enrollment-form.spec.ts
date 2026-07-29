import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EnrollmentForm } from './enrollment-form';

describe('EnrollmentForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentForm],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EnrollmentForm);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
