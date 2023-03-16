import { TestBed } from '@angular/core/testing';

import { HjNewsService } from './hj-news.service';

describe('HjNewsService', () => {
  let service: HjNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HjNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
