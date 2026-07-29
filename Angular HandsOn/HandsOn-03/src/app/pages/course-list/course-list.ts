import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CourseCard, CourseCardData } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  courses: CourseCardData[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 3, gradeStatus: 'failed' },
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy avoids re-rendering every card on array changes; Angular only
  // updates cards whose id changed instead of re-creating the whole list.
  trackByCourseId(index: number, course: CourseCardData): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
