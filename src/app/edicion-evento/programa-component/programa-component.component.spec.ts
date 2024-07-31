import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaComponentComponent } from './programa-component.component';

describe('ProgramaComponentComponent', () => {
  let component: ProgramaComponentComponent;
  let fixture: ComponentFixture<ProgramaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
