import { Component } from '@angular/core';

import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise<string>(((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  }));
  filteredStatus = '';
  statuses = [
    {name: 'All', value: ''},
    {name: 'Stable', value: 'stable'},
    {name: 'Offline', value: 'offline'},
    {name: 'Critical', value: 'critical'}
  ];
  servers = [
    new Server('medium', 'Production', 'critical', new Date(1989, 0, 20)),
    new Server('large', 'User Database', 'stable', new Date(1989, 0, 20)),
    new Server('small', 'Development Server', 'offline', new Date(1989, 0, 20)),
    new Server('small', 'Testing Environment Server', 'stable', new Date(1989, 0, 20))
  ];

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer(): void {
    this.servers.push(new Server('small', 'New Server', 'stable', new Date(1989, 0, 20)));
  }
}
