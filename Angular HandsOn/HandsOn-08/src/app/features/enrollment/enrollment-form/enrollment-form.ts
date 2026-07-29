import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CourseService } from '../../../services/course';

@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule, NgIf],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;

  submitted = false;

  constructor(private courseService: CourseService) {}

  onSubmit(form: NgForm): void {
    console.log(form.value, form.valid);
    if (form.valid) {
      this.courseService
        .createCourse({ name: this.studentName, code: 'REQ', credits: 0, gradeStatus: 'pending' })
        .subscribe(() => {
          this.submitted = true;
        });
    }
  }
}
