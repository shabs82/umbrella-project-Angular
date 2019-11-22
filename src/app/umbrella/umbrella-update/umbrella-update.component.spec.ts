import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaUpdateComponent } from './umbrella-update.component';

describe('UmbrellaUpdateComponent', () => {
  let component: UmbrellaUpdateComponent;
  let fixture: ComponentFixture<UmbrellaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbrellaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbrellaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
