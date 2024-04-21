import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectpaysCreateComponent } from './directpays-create.component';

describe('DirectpaysCreateComponent', () => {
  let component: DirectpaysCreateComponent;
  let fixture: ComponentFixture<DirectpaysCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectpaysCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectpaysCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
