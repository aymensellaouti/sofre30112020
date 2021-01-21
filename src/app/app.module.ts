import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './pages/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { NgstyleTestComponent } from './directives/ngstyle-test/ngstyle-test.component';
import { WordComponent } from './directives/word/word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NotNumberDirective } from './directives/not-number.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { TestNgifComponent } from './components/test-ngif/test-ngif.component';
import { FirstPipePipe } from './pipes/first-pipe.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';

import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AuthHttpInterceptor } from './interceptors/auth-interceptor';
import { CvModule } from './cv/cv.module';

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
    NgstyleTestComponent,
    WordComponent,
    HighlightDirective,
    NotNumberDirective,
    RainbowDirective,
    TestNgifComponent,
    FirstPipePipe,
    TodoComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    BackComponent,
    FrontComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthHttpInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
