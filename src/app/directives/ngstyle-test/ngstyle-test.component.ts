import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-test',
  templateUrl: './ngstyle-test.component.html',
  styleUrls: ['./ngstyle-test.component.css'],
})
export class NgstyleTestComponent implements OnInit {
  @Input() color = 'green';
  @Input() font = 'verdana';
  @Input() size = '58px';
  constructor() {}

  ngOnInit(): void {}
}
