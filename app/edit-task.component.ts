import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Meal</h1>
      <div>
        <label>Meal Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Calories:</label>
        <input [(ngModel)]="childSelectedTask.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
