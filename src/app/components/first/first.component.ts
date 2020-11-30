import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  isDisabled = true;
  color = 'red';
  messageToShow = '';
  constructor() {}

  ngOnInit(): void {}

  showMessage(message) {
    console.log(message);
    this.messageToShow = message.value;
  }

  enableDisable() {
    this.isDisabled = !this.isDisabled;
  }
}
