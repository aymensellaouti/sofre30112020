import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Personne } from '../model/personne';

const PERSONNE_API =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  selectedPersonne = new Subject<Personne>();
  personnes: Personne[] = [];
  constructor(private http: HttpClient) {
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
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(PERSONNE_API);
  }

  deleteFakePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index == -1) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }

  getFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(PERSONNE_API + id);
  }

  addFakePersonne(personne: Personne) {
    this.personnes.push(personne);
  }

  addPersonne(personne: Personne): Observable<Personne> {
    /*
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token); */
    return this.http.post<Personne>(PERSONNE_API, personne);
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne.next(personne);
  }

  deletePersonne(id: number): Observable<any> {
    /* const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token); */
    return this.http.delete<Personne>(PERSONNE_API + id);
  }
}
