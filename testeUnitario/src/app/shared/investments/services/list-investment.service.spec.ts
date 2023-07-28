import { TestBed } from '@angular/core/testing';

import { ListInvestmentService } from './list-investment.service';

describe('ListInvestmentService', () => {
  let service: ListInvestmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInvestmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
