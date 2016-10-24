
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
        if (input[i].done === false){
          output.push(input[i]);
        }
      }
      return output
    } else if (selectedCalories === "<300") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].done === true){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
