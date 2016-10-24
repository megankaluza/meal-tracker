
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
    if(selectedCalories === ">500"){
      for(var i = 0; i < input.length; i++){
        if (input[i].calorie >= 500){
          output.push(input[i]);
        }
      }
      return output
    } else if(selectedCalories === "<300") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].calorie < 500){
          output.push(input[i]);
        }
      }
      return output;
    } else if(selectedCalories === "300-500"){
      for(var i = 0; i < input.length; i++){
        if(input[i].calorie >= 300 && input[i].calorie <= 500){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
