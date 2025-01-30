import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojitosetjusComponent } from './mojitosetjus.component';

describe('MojitosetjusComponent', () => {
  let component: MojitosetjusComponent;
  let fixture: ComponentFixture<MojitosetjusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MojitosetjusComponent]
    });
    fixture = TestBed.createComponent(MojitosetjusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
