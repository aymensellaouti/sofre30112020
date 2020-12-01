import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() value;
  @Input() name;
  firstname;
  @Input() defaultColor;
  color;
  @Output() sendDataToDad = new EventEmitter();
  @Output() sendMyFavoriteColor = new EventEmitter();
  favoriteColor = 'red';
  /*
    En tant que fils je dois créer un event
    Ensuite je dois préciser quand emmetre l'event
    Mettre la data à envoyer à mon Père
  */
  constructor() {}

  ngOnInit(): void {
    this.color = this.defaultColor;
  }

  sendData() {
    this.sendDataToDad.emit('Bonjour Papa');
  }

  sendFavoriteColor() {
    this.sendMyFavoriteColor.emit({
      color : this.favoriteColor,
      name : 'Mohamed'
    });
  }
}
