import { Pipe, PipeTransform } from '@angular/core';

import { Server } from './server.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(servers: Server[], filterString: string, propName: string): Server[] {
    if (servers.length === 0 || filterString === '') {
      return servers;
    }

    const resultServers: Server[] = [];
    for (const server of servers) {
      if (server[propName] === filterString) {
        resultServers.push(server);
      }
    }

    return resultServers;
  }
}
