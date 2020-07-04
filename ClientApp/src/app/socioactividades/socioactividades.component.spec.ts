import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioactividadesComponent } from './socioactividades.component';

describe('SocioactividadesComponent', () => {
  let component: SocioactividadesComponent;
  let fixture: ComponentFixture<SocioactividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioactividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
