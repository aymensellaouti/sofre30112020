import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './pages/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleTestComponent } from './directives/ngstyle-test/ngstyle-test.component';
import { WordComponent } from './directives/word/word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NotNumberDirective } from './directives/not-number.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { TestNgifComponent } from './components/test-ngif/test-ngif.component';
import { FirstPipePipe } from './pipes/first-pipe.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { PersonneDetailsComponent } from './cv/personne-details/personne-details.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgstyleTestComponent,
    WordComponent,
    HighlightDirective,
    NotNumberDirective,
    RainbowDirective,
    TestNgifComponent,
    FirstPipePipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    PersonneDetailsComponent,
    AddPersonneComponent,
    BackComponent,
    FrontComponent,
    NF404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
