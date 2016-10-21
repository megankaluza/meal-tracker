import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[]) {
    var output: Meal[] = [];
    if(selectedCalories === "high") {
  for (var i = 0; i < input.length; i++) {
    if (input[i].done === false) {
      output.push(input[i]);
    }
  }
  return output;
} else if (selectedCalories === "low") {
  for (var i = 0; i < input.length; i++) {
    if (input[i].done === true) {
      output.push(input[i]);
    }
  }
  return output;
} else {
  return input;
}
}
}
