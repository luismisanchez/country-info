import { TestBed } from '@angular/core/testing';

import { CountryListApiService } from './country-list-api.service';

describe('CountryListApiService', () => {
  let service: CountryListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
