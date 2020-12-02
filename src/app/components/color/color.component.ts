import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((lesParamsDeLaRoute) => {
      this.color = lesParamsDeLaRoute.couleur;
    });
    this.activatedRoute.queryParams.subscribe(
      (qp)=> console.log(qp)
    )
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
  }
  goToTodo() {
    this.router.navigate(['todo']);
  }
}
