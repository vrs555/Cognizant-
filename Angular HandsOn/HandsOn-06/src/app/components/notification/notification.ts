import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NotificationService } from '../../services/notification';

// providers: [NotificationService] here creates a new, separate instance of the
// service scoped to this component (and its children) instead of the app-wide singleton.
@Component({
  selector: 'app-notification',
  imports: [NgFor],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  constructor(private notificationService: NotificationService) {}

  get messages(): string[] {
    return this.notificationService.getMessages();
  }

  addSample(): void {
    this.notificationService.notify('New course added to the catalog.');
  }
}
