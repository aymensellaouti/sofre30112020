import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  color = 'red';
  font = 'arial';
  size = 45;
  constructor() {}

  ngOnInit(): void {}
}
