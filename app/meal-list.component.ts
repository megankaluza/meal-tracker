import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <label>Show by Calorie Intake</label>
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value=">500">>500</option>
    <option value="300-500">300-500</option>
    <option value="<300"><300</option>
  </select>
    <div *ngFor="let currentMeal of childMealList | calories:selectedCalories" >
      <h2>{{ currentMeal.name }}</h2>
      <h3>{{ currentMeal.description }}</h3>
      <p>{{ currentMeal.calorie }} calories</p>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionFromMenu) {
  this.selectedCalories = optionFromMenu;
}
  editButtonHasBeenClicked(mealToEdit: Meal) {
  this.clickSender.emit(mealToEdit);
  }
}
