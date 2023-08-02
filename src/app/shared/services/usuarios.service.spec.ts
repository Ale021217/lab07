import { TestBed } from '@angular/core/testing';

import { UsuariosServices } from './usuarios.service';

describe('UsuariosService', () => {
  let service: UsuariosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
