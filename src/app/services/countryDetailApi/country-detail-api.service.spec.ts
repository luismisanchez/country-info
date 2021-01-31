import { TestBed } from '@angular/core/testing';

import { CountryDetailApiService } from './country-detail-api.service';

describe('CountryDetailApiService', () => {
  let service: CountryDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
