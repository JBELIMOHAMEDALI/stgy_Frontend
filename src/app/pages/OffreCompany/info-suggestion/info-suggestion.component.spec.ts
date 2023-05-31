import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSuggestionComponent } from './info-suggestion.component';

describe('InfoSuggestionComponent', () => {
  let component: InfoSuggestionComponent;
  let fixture: ComponentFixture<InfoSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
