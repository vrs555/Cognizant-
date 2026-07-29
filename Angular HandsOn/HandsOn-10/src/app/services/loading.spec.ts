import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit true then false when setLoading is toggled', (done) => {
    const values: boolean[] = [];
    service.isLoading$.subscribe((v) => {
      values.push(v);
      if (values.length === 3) {
        expect(values).toEqual([false, true, false]);
        done();
      }
    });
    service.setLoading(true);
    service.setLoading(false);
  });
});
