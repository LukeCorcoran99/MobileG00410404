import { TestBed } from '@angular/core/testing';

import { ClockmonthService } from './clockmonth.service';

describe('ClockmonthService', () => {
  let service: ClockmonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockmonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
