
import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], selectedCalories: string) {
    if(selectedCalories === "all"){
      return input;
    }
    console.log(input);
 }
}
