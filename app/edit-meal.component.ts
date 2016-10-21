import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Meal Description:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <!--<label>Calories:</label>
        <select [(ngModel)]="childSelectedMeal.id">
        <option value="high">500 or more</option>
        <option value="medium" selected="selected">300 - 500</option>
        <option value="low">less than 300</option>
        </select>-->
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
