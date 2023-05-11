import { TestBed } from '@angular/core/testing';

import { ClockyearService } from './clockyear.service';

describe('ClockyearService', () => {
  let service: ClockyearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockyearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
