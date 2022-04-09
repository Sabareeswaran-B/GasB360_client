import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledproductComponent } from './filledproduct.component';

describe('FilledproductComponent', () => {
  let component: FilledproductComponent;
  let fixture: ComponentFixture<FilledproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
