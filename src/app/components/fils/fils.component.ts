import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() value = 'x';
  @Input() name = 'x';
  firstname;
  constructor() {}

  ngOnInit(): void {}
  /*

  f(value, name) {console.log(value)}

  g() {
    f(1);
    f(2);
  }

*/
}
