import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminactdesctusersComponent } from './adminactdesctusers.component';

describe('AdminactdesctusersComponent', () => {
  let component: AdminactdesctusersComponent;
  let fixture: ComponentFixture<AdminactdesctusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminactdesctusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminactdesctusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
