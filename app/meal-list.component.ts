import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <label>Show by Calorie Intake</label>
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="high">500</option>
    <option value="medium">300-500</option>
    <option value="low">300</option>
  </select>
    <div *ngFor="let currentMeal of childMealList">
      <h2>{{ currentMeal.name }}</h2>
      <h3>{{ currentMeal.description }}</h3>
      <p>{{ currentMeal.id }} calories</p>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  // public selectedCalories: string = "high";
  editButtonHasBeenClicked(mealToEdit: Meal) {
  this.clickSender.emit(mealToEdit);
}

// onChange(optionFromMenu) {
// this.selectedCalories = optionFromMenu;
// console.log(this.selectedCalories);
// }


}
