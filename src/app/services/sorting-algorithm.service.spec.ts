import { TestBed } from '@angular/core/testing';

import { SortingAlgorithmService } from './sorting-algorithm.service';

describe('SortingAlgorithmService', () => {
  let service: SortingAlgorithmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingAlgorithmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
