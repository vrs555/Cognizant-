import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const directive = new Highlight(el);
    expect(directive).toBeTruthy();
  });

  it('should apply and remove the background color on hover', () => {
    const nativeEl = document.createElement('div');
    const el = new ElementRef(nativeEl);
    const directive = new Highlight(el);
    directive.appHighlight = 'lightblue';

    directive.onMouseEnter();
    expect(nativeEl.style.backgroundColor).toBe('lightblue');

    directive.onMouseLeave();
    expect(nativeEl.style.backgroundColor).toBe('');
  });
});
