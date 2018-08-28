import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() activeUsers: string[];
  @Output() toInactiveEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setToInactive(id: number) {
    this.toInactiveEvent.emit(id);
  }

}
