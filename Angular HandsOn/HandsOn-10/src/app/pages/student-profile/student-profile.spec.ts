import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { StudentProfile } from './student-profile';

describe('StudentProfile', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfile],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentProfile);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
