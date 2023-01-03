import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverProfileComponent } from './reserver-profile.component';

describe('ReserverProfileComponent', () => {
  let component: ReserverProfileComponent;
  let fixture: ComponentFixture<ReserverProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
