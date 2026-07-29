import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CourseService } from '../../services/course';
import { EnrollmentService, Student } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  imports: [NgIf, NgFor],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | undefined;
  students: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(id).subscribe((course) => (this.course = course));

    // switchMap cancels the previous in-flight student lookup if a new
    // courseId arrives before it completes, preventing out-of-order responses.
    this.route.paramMap
      .pipe(switchMap((params) => this.enrollmentService.getStudentsByCourse(Number(params.get('id')))))
      .subscribe((students) => (this.students = students));
  }
}
