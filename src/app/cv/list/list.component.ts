import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile2.png',
        123456,
        38
      ),
      new Personne(
        2,
        'sellaouti2',
        'aymen2',
        'teacher2',
        'rotating_card_profile3.png',
        789456,
        38
      ),
    ];
  }
  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
