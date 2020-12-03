import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  /*  @Output() sendSelectedPersonne = new EventEmitter();
   */ constructor(private cvService: CvService) {}

  ngOnInit(): void {}
  selectPersonne() {
    this.cvService.selectPersonne(this.personne);
  }
}
