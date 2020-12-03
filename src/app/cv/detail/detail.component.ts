import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cvService.selectedPersonne.subscribe(
      /* console.log() */
      (personne) => (this.personne = personne)
    );
  }
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      alert(`
        ${this.personne.name} est déjà embauché
      `);
    }
  }
  detailPersonne() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
