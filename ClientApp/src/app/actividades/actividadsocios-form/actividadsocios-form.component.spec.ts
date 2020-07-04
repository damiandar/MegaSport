import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadsociosFormComponent } from './actividadsocios-form.component';

describe('ActividadsociosFormComponent', () => {
  let component: ActividadsociosFormComponent;
  let fixture: ComponentFixture<ActividadsociosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadsociosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadsociosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
