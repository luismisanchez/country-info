import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permalink'
})
export class PermalinkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
