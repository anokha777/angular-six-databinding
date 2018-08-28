import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  activeUsers = [
    "anokha", "anokha1", "anokha2"
  ];
  inactiveUsers = [
    "kumar", "kumar1", "kumar2"
  ];

  setToInactiveEvent(event) {
    this.inactiveUsers.push(this.activeUsers[event]);
    this.activeUsers.splice(event, 1);
    
  }

  setToActive(event) {
    this.activeUsers.push(this.inactiveUsers[event]);
    this.inactiveUsers.splice(event, 1);
    
  }

}
