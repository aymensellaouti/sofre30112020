import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  @Input() pereVar = '';
  color = 'yellow';
  constructor() {
    this.pereVar = 'pereVar';
  }

  ngOnInit(): void {}
  processSonEvent(message) {
    alert(message);
  }
  changeColor(data) {
    this.color = data.color;
    this.pereVar = data.name;
  }
}
