import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <header>
    <h1>Halloween Mega Meals</h1>
    <hr>
  </header>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
  (newMealSender)="addMeal($event)"
  ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Pumpkin Spiced Salad", "Contains pears, apples, walnuts, and pumpkin spice", 200),
      new Meal("Pumpkin Spiced Latte", "Contains pumpkin spiced flavored almond milk", 500),
      new Meal("Ghoul Doughtnut", "Contains sprinkles and frosting", 300)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
  this.masterMealList.push(newMealFromChild);
  }
}
