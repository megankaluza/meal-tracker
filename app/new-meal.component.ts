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
      <input #newId>
      <button (click)="
        addClicked(newDescription.value, newId.value);
        newDescription.value='';
        newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newMealToAdd: Meal = new Meal(name, description, id);
    this.newMealSender.emit(newMealToAdd);
  }
}
