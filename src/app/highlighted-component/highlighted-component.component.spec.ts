import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedComponentComponent } from './highlighted-component.component';

describe('HighlightedComponentComponent', () => {
  let component: HighlightedComponentComponent;
  let fixture: ComponentFixture<HighlightedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
