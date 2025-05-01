import { TestBed } from '@angular/core/testing';

import { ExhibitionsApiService } from './exhibitions-api.service';

describe('ExhibitionsApiService', () => {
  let service: ExhibitionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
