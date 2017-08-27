import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealdatalistComponent } from './realdatalist.component';

describe('RealdatalistComponent', () => {
  let component: RealdatalistComponent;
  let fixture: ComponentFixture<RealdatalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealdatalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealdatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
