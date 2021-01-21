import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BackComponent } from './components/back/back.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { PersonneDetailsComponent } from './cv/personne-details/personne-details.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './todo/todo/todo.component';

// cv/detail
const routes: Routes = [
  { path: '', redirectTo: 'color/red', pathMatch: 'full' },
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
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
  },
  { path: 'todo', component: TodoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
