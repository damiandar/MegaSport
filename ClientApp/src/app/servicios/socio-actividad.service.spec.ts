import { TestBed } from '@angular/core/testing';

import { SocioActividadService } from './socio-actividad.service';

describe('SocioActividadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocioActividadService = TestBed.get(SocioActividadService);
    expect(service).toBeTruthy();
  });
});
