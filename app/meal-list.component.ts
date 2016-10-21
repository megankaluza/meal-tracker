import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentTask of childMealList">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
  this.clickSender.emit(taskToEdit);
}
}
