import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaORGComponentComponent } from './convocatoria-orgcomponent.component';

describe('ConvocatoriaORGComponentComponent', () => {
  let component: ConvocatoriaORGComponentComponent;
  let fixture: ComponentFixture<ConvocatoriaORGComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvocatoriaORGComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvocatoriaORGComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
