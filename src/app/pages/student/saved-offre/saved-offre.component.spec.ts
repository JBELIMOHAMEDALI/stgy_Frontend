import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedOffreComponent } from './saved-offre.component';

describe('SavedOffreComponent', () => {
  let component: SavedOffreComponent;
  let fixture: ComponentFixture<SavedOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
