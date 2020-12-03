import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  selectedPersonne = new Subject<Personne>();
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

  deletePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index == -1) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }

  getPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }

  addPersonne(personne: Personne) {
    this.personnes.push(personne);
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne.next(personne);
  }
}
