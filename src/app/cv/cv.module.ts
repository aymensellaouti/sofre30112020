import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';

@NgModule({
  declarations: [
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    EmbaucheComponent,
    PersonneDetailsComponent,
    AddPersonneComponent,
    DefaultImagePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
          { path: '', component: CvComponent },
          {
            path: 'add',
            component: AddPersonneComponent,
            canActivate: [LoginGuard],
          },
          { path: ':id', component: PersonneDetailsComponent }
    ]),
  ],
  exports: [],
})
export class CvModule {}
