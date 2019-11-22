import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaListComponent } from './umbrella-list.component';

describe('UmbrellaListComponent', () => {
  let component: UmbrellaListComponent;
  let fixture: ComponentFixture<UmbrellaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbrellaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbrellaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
