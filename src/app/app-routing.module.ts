import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './components/back/back.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { PersonneDetailsComponent } from './cv/personne-details/personne-details.component';
import { TodoComponent } from './todo/todo/todo.component';

// cv/detail
const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddPersonneComponent },
      { path: ':id', component: PersonneDetailsComponent },
    ],
  },
  {
    path: '',
    component: FrontComponent,
    children: [{ path: 'color/:couleur', component: ColorComponent }],
  },
  {
    path: 'admin',
    component: BackComponent,
    children: [{ path: 'first', component: FirstComponent }],
  },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
