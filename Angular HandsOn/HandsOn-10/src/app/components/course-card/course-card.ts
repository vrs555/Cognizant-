import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

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
export class CourseCard implements OnInit, OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectEnrolledIds)
      .pipe(map((ids) => ids.includes(this.course.id)))
      .subscribe((isEnrolled) => (this.isEnrolled = isEnrolled));
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
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      this.enrollRequested.emit(this.course.id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('previous:', changes['course'].previousValue, 'current:', changes['course'].currentValue);
    }
  }
}
