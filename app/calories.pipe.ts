
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
    var output: Meal [] = [];
    for(var i = 0; i < input.length; i++){
      if(selectedCalories === "medium"){
      }
    }
    return input;
 }
}
