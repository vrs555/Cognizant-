import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  courses: Course[] = [];
  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
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
