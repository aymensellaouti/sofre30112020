import { Component, OnInit } from '@angular/core';
import { CvService } from './cv/services/cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  nbClick = 0;
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvService.selectedPersonne.subscribe((personne) => this.nbClick++);
  }
  title = 'aymen';
  name = '';
}
