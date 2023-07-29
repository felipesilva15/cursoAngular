import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Investments } from '../model/investments';
import { ListInvestmentService } from './list-investment.service';
import { MOCK_LIST } from './list-investments.mock';

describe('ListInvestmentService', () => {
  let service: ListInvestmentService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  const mockList: Array<Investments> = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestmentService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) shoud be list all investments', (done) => {
    service.list().subscribe(
      (res: Array<Investments>) => {
        expect(res[0].name).toEqual('Banco 1');
        expect(res[0].value).toEqual(100);

        expect(res[4].name).toEqual('Banco 5');
        expect(res[4].value).toEqual(100);
        done();
      }
    );

    const req = httpTestingController.expectOne(URL);
    req.flush(mockList);

    expect(req.request.method).toEqual('GET');
  });
});
