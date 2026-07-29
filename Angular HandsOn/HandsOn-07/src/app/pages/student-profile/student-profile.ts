import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-student-profile',
  imports: [NgFor, NgIf, Notification],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile {
  constructor(private enrollmentService: EnrollmentService) {}

  get enrolledCourses() {
    return this.enrollmentService.getEnrolledCourses();
  }
}
