import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaAddComponent } from './umbrella-add.component';

describe('UmbrellaAddComponent', () => {
  let component: UmbrellaAddComponent;
  let fixture: ComponentFixture<UmbrellaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbrellaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbrellaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
