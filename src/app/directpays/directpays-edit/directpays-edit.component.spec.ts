import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectpaysEditComponent } from './directpays-edit.component';

describe('DirectpaysEditComponent', () => {
  let component: DirectpaysEditComponent;
  let fixture: ComponentFixture<DirectpaysEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectpaysEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectpaysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
