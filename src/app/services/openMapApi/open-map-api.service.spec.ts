import { TestBed } from '@angular/core/testing';

import { OpenMapApiService } from './open-map-api.service';

describe('OpenMapApiService', () => {
  let service: OpenMapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenMapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
