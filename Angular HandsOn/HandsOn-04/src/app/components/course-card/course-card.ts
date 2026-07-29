import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';

export interface CourseCardData {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled?: boolean;
}

const BORDER_COLORS: Record<CourseCardData['gradeStatus'], string> = {
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
  @Input() course!: CourseCardData;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  get cardClasses() {
    return {
      'card--enrolled': !!this.course.enrolled,
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('previous:', changes['course'].previousValue, 'current:', changes['course'].currentValue);
    }
  }
}
