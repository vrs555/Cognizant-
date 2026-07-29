import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private messages: string[] = [];

  notify(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
