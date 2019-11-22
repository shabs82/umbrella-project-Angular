import { TestBed } from '@angular/core/testing';

import { UmbrellaServiceService } from './umbrella-service';

describe('UmbrellaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmbrellaServiceService = TestBed.get(UmbrellaServiceService);
    expect(service).toBeTruthy();
  });
});
