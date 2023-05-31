import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReqComponent } from './info-req.component';

describe('InfoReqComponent', () => {
  let component: InfoReqComponent;
  let fixture: ComponentFixture<InfoReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
