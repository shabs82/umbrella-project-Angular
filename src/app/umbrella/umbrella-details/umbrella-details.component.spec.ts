import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaDetailsComponent } from './umbrella-details.component';

describe('UmbrellaDetailsComponent', () => {
  let component: UmbrellaDetailsComponent;
  let fixture: ComponentFixture<UmbrellaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbrellaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbrellaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
