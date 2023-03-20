import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VazhipaduComponent } from './vazhipadu.component';

describe('VazhipaduComponent', () => {
  let component: VazhipaduComponent;
  let fixture: ComponentFixture<VazhipaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VazhipaduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VazhipaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
