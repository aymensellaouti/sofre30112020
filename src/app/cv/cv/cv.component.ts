import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(private fakeService: FakeService) {}

  ngOnInit(): void {
    /* this.loggerService.logger('Cc je suis cvComponent'); */
  }

  getSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
