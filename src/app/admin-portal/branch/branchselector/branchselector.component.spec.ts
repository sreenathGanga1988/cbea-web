import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchselectorComponent } from './branchselector.component';

describe('BranchselectorComponent', () => {
  let component: BranchselectorComponent;
  let fixture: ComponentFixture<BranchselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
