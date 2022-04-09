import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfilledproductComponent } from './unfilledproduct.component';

describe('UnfilledproductComponent', () => {
  let component: UnfilledproductComponent;
  let fixture: ComponentFixture<UnfilledproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfilledproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfilledproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
