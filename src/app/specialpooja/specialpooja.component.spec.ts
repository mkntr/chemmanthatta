import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialpoojaComponent } from './specialpooja.component';

describe('SpecialpoojaComponent', () => {
  let component: SpecialpoojaComponent;
  let fixture: ComponentFixture<SpecialpoojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialpoojaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialpoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
