import { TestBed } from '@angular/core/testing';

import { CreaUsuarioService } from './crea-usuario.service';

describe('CreaUsuarioService', () => {
  let service: CreaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
