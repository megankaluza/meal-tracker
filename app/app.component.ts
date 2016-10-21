import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Halloween Mega Meals</h1>
    <hr>
    <!-- <new-meal>(newMealSender)="addMeal($event)"</new-meal> -->
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
    <!--<edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task> -->
    <!-- <new-meal
  (newTaskSender)="addTask($event)"
  ></new-meal> -->
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Pumpkin Spiced Salad", 310),
      new Meal("Pumpkin Spiced Latte", 210),
      new Meal("Ghoul Doughtnut", 400)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addMeal(newMealFromChild: Meal) {
  this.masterMealList.push(newMealFromChild);
}
}
