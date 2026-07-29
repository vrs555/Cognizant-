import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { convertToParamMap } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseList } from './course-list';
import { Course } from '../../models/course.model';

describe('CourseList (NgRx-connected)', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
  ];

  const initialState = {
    course: { courses: mockCourses, loading: false, error: null },
    enrollment: { enrolledCourseIds: [] },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideRouter([]),
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useValue: { snapshot: { queryParamMap: convertToParamMap({}) } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render course cards from the initial state', () => {
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(2);
  });

  it('should show the loading indicator when the store is in a loading state', () => {
    store.setState({
      course: { courses: [], loading: true, error: null },
      enrollment: { enrolledCourseIds: [] },
    });
    fixture.detectChanges();
    const loadingText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(loadingText).toContain('Loading courses');
  });
});
