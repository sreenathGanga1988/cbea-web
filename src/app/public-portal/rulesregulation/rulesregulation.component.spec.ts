import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesregulationComponent } from './rulesregulation.component';

describe('RulesregulationComponent', () => {
  let component: RulesregulationComponent;
  let fixture: ComponentFixture<RulesregulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesregulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesregulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
