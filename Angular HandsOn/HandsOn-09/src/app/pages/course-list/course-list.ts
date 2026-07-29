import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, FormsModule, AsyncPipe, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
    this.store.dispatch(loadCourses());
  }

  onSearchChange(): void {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
  }

  goToDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  // trackBy avoids re-rendering every card on array changes; Angular only
  // updates cards whose id changed instead of re-creating the whole list.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
