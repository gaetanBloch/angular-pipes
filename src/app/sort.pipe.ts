import { Pipe, PipeTransform } from '@angular/core';

import { Server } from './server.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(servers: Server[]): Server[] {
    return servers.sort((a, b) => {
      if (a.name < b.name ) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

}
