import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauches: Personne[] = [];
  constructor() {}
  getEmbauches(): Personne[] {
    return this.embauches;
  }
  embaucher(personne: Personne) {
    const index = this.embauches.indexOf(personne);
    if(index == -1) {
      this.embauches.push(personne);
      return 1;
    } else {
      return 0;
    }
  }
}
