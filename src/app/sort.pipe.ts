import { Pipe, PipeTransform } from '@angular/core';

import { Server } from './server.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(servers: Server[], propName: string = 'name'): Server[] {
    return servers.sort((a, b) => {
      if (a[propName] > b[propName] ) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
