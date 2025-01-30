import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkshakeComponent } from './milkshake.component';

describe('MilkshakeComponent', () => {
  let component: MilkshakeComponent;
  let fixture: ComponentFixture<MilkshakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkshakeComponent]
    });
    fixture = TestBed.createComponent(MilkshakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
