import { TestBed } from '@angular/core/testing';

import { GlobalWorkerService } from './global-worker.service';

describe('GlobalWorkerService', () => {
  let service: GlobalWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
