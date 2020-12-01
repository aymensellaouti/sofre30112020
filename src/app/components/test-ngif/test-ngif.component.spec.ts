import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgifComponent } from './test-ngif.component';

describe('TestNgifComponent', () => {
  let component: TestNgifComponent;
  let fixture: ComponentFixture<TestNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
