import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
// import { EditTaskComponent } from './edit-task.component';
import { NewMealComponent } from './new-meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    // EditTaskComponent,
    NewMealComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
