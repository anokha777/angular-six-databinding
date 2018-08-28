import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input() inactiveUsers: string[];
  @Output() toActiveEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  setToActive(id: number) {
    this.toActiveEvent.emit(id);
  }

}
