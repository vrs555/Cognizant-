import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [provideMockStore({ initialState: { enrollment: { enrolledCourseIds: [] } } })],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name', () => {
    const heading = fixture.debugElement.query(By.css('h3')).nativeElement.textContent;
    expect(heading).toContain('Data Structures');
  });

  it('should emit enrollRequested with the course id when Enroll is clicked', () => {
    spyOn(component.enrollRequested, 'emit');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    enrollButton.click();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should log previous and current values on ngOnChanges', () => {
    spyOn(console, 'log');
    const previous = { ...mockCourse, name: 'Old Name' };
    component.ngOnChanges({
      course: {
        previousValue: previous,
        currentValue: mockCourse,
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(console.log).toHaveBeenCalledWith('previous:', previous, 'current:', mockCourse);
  });

  it('should toggle expanded state when Show Details is clicked', () => {
    const detailsButton = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
    expect(component.isExpanded).toBeFalse();
    detailsButton.click();
    expect(component.isExpanded).toBeTrue();
  });
});
