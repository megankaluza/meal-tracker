import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit<img src="resources/img/cocktail.png" alt="Cocktail Glass">Meal</h1>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Meal Description:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Calories:</label>
        <select [(ngModel)]="childSelectedMeal.calorie">
        <option value=">500">>500</option>
        <option value="300-500" selected="selected">300-500</option>
        <option value="<300"><300</option>
        </select>
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
