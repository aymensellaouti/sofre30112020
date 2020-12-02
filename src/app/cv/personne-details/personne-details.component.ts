import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const personne = this.cvService.getPersonneById(params.id);
      if (!personne) {
        this.router.navigate(['cv']);
      } else {
        this.personne = personne;
      }
    });
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne);
    this.router.navigate(['cv']);
  }
}
