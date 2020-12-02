import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
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
        '                ',
        789456,
        38
      ),
      new Personne(3, 'sellaouti2 ', 'aymen2', 'teacher2', '', 789456, 38),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
