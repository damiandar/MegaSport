import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioactividadesFormComponent } from './socioactividades-form.component';

describe('SocioactividadesFormComponent', () => {
  let component: SocioactividadesFormComponent;
  let fixture: ComponentFixture<SocioactividadesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioactividadesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioactividadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
