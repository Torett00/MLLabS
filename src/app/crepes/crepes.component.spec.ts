import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepesComponent } from './crepes.component';

describe('CrepesComponent', () => {
  let component: CrepesComponent;
  let fixture: ComponentFixture<CrepesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrepesComponent]
    });
    fixture = TestBed.createComponent(CrepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
