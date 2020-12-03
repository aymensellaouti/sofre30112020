import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css'],
})
export class PersonneDetailsComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getPersonneById(params.id).subscribe(
        (personne) => (this.personne = personne),
        (error) => {
          const fakePersonne = this.cvService.getFakePersonneById(params.id);
          if (!fakePersonne) {
            this.router.navigate(['cv']);
          } else {
            alert('Problème accès serveur Fake Data');
            this.personne = fakePersonne;
          }
        }
      );
    });
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (success) => this.router.navigate(['cv']),
      (erreur) => alert('Pbm de suppression')
    );
  }
}
