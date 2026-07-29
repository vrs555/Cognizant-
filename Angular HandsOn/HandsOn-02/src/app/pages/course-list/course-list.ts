import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CourseCard, CourseCardData } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses: CourseCardData[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4 },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3 },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 3 },
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
