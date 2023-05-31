import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReqComponent } from './my-req.component';

describe('MyReqComponent', () => {
  let component: MyReqComponent;
  let fixture: ComponentFixture<MyReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
