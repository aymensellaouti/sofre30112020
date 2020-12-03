import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  /*   @Output() forwardSelectedPersonne = new EventEmitter();
   */ constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => (this.personnes = personnes),
      (error) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert('Problème de connexion au serveur');
        console.log(error);
      },
      () => console.log('complete')
    );
  }
  /*   forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  } */
}
