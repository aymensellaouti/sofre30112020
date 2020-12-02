import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor() {}
  observable: Observable<number>;
  imageObservable: Observable<string>;
  paths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  valeur;
  ngOnInit(): void {
    this.observable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.imageObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i == this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, 1000);
    });

    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable.subscribe(
      (data) => console.log('Issam data', data),
      (error) => console.log(error),
      () => console.log('j ai terminé mon travail')
    );
    /*     this.observable.subscribe((value) => this.valeur = value ); */
  }
}
