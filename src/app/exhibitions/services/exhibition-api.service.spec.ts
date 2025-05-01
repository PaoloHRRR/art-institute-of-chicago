import { TestBed } from '@angular/core/testing';

import { ExhibitionApiService } from './exhibition-api.service';

describe('ExhibitionApiService', () => {
  let service: ExhibitionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
