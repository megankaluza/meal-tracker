import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Meal Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Calories:</label>
      <select #newId>
      <option value=">500">>500</option>
      <option value="300-500" selected="selected">300-500</option>
      <option value="<300"><300</option>
      </select>
      <button (click)="
        addClicked(newDescription.value, newCalorie.value);
        newDescription.value='';
        newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(description: string, calorie: number) {
    var newMealToAdd: Meal = new Meal(name, description, calorie);
    this.newMealSender.emit(newMealToAdd);
  }
}
