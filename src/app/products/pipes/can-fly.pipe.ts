import { Pipe, type PipeTransform } from '@angular/core';
@Pipe({
  name: 'conditionCase'
})

export class CanFlyPipe implements PipeTransform {

  transform( value: boolean ): 'male'|'female' {
    return value ? 'male': 'female';
  }
}

