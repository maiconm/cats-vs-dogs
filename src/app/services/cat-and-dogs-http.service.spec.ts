import { TestBed } from '@angular/core/testing';

import { CatAndDogsHttpService } from './cat-and-dogs-http.service';

describe('CatAndDogsHttpService', () => {
  let service: CatAndDogsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatAndDogsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
