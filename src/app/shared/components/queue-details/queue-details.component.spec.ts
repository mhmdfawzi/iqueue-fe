import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDetailsComponent } from './queue-details.component';

describe('QueueDetailsComponent', () => {
  let component: QueueDetailsComponent;
  let fixture: ComponentFixture<QueueDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueueDetailsComponent]
    });
    fixture = TestBed.createComponent(QueueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
