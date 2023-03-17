import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevaswomComponent } from './devaswom.component';

describe('DevaswomComponent', () => {
  let component: DevaswomComponent;
  let fixture: ComponentFixture<DevaswomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevaswomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevaswomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
