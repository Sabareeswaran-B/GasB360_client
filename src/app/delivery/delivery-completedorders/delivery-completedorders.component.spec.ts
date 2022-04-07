import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCompletedordersComponent } from './delivery-completedorders.component';

describe('DeliveryCompletedordersComponent', () => {
  let component: DeliveryCompletedordersComponent;
  let fixture: ComponentFixture<DeliveryCompletedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryCompletedordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCompletedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
