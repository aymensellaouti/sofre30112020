import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  errorMessage = '';
  ngOnInit(): void {}

  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.router.navigate(['cv']);
      },
      (error) => {
        this.errorMessage = 'Veuillez vérifier vos credentials';
      }
    );
  }
}
