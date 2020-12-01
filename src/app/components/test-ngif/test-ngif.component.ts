import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngif',
  templateUrl: './test-ngif.component.html',
  styleUrls: ['./test-ngif.component.css'],
})
export class TestNgifComponent implements OnInit {
  show = true;
  constructor() {}

  ngOnInit(): void {}
  showHide() {
    this.show = !this.show;
  }
}
