import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number = 10): string {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }
  }
}
