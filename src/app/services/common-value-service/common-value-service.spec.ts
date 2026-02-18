import { TestBed } from '@angular/core/testing';

import { CommonValueService } from './common-value-service';

describe('CommonValue', () => {
  let service: CommonValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
