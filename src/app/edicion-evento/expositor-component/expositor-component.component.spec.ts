import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorComponentComponent } from './expositor-component.component';

describe('ExpositorComponentComponent', () => {
  let component: ExpositorComponentComponent;
  let fixture: ComponentFixture<ExpositorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpositorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpositorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
