import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesComponent } from './thes.component';

describe('ThesComponent', () => {
  let component: ThesComponent;
  let fixture: ComponentFixture<ThesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesComponent]
    });
    fixture = TestBed.createComponent(ThesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
