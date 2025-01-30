import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiseriesComponent } from './patiseries.component';

describe('PatiseriesComponent', () => {
  let component: PatiseriesComponent;
  let fixture: ComponentFixture<PatiseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatiseriesComponent]
    });
    fixture = TestBed.createComponent(PatiseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
