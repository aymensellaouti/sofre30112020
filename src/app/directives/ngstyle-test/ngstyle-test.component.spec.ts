import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleTestComponent } from './ngstyle-test.component';

describe('NgstyleTestComponent', () => {
  let component: NgstyleTestComponent;
  let fixture: ComponentFixture<NgstyleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
