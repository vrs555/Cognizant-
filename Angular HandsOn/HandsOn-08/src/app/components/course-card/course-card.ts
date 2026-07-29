import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

const BORDER_COLORS: Record<Course['gradeStatus'], string> = {
  passed: 'green',
  failed: 'red',
  pending: 'grey',
};

@Component({
  selector: 'app-course-card',
  imports: [NgClass, NgStyle, NgSwitch, NgSwitchCase, CreditLabelPipe, Highlight],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  get isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  get borderStyle() {
    return { 'border-left-color': BORDER_COLORS[this.course.gradeStatus] };
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnroll(): void {
    if (this.isEnrolled) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
      this.enrollRequested.emit(this.course.id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('previous:', changes['course'].previousValue, 'current:', changes['course'].currentValue);
    }
  }
}
