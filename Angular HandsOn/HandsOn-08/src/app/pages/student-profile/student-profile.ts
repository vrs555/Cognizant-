import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';
import { Notification } from '../../components/notification/notification';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  imports: [NgFor, NgIf, Notification],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrolledCourses().subscribe((courses) => {
      this.enrolledCourses = courses;
    });
  }
}
