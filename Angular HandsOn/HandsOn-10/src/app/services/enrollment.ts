import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CourseService } from './course';
import { Course } from '../models/course.model';

export interface Student {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService, private http: HttpClient) {}

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:3000/students?courseId=${courseId}`);
  }

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService
      .getCourses()
      .pipe(map((courses) => courses.filter((course) => this.enrolledCourseIds.includes(course.id))));
  }
}
