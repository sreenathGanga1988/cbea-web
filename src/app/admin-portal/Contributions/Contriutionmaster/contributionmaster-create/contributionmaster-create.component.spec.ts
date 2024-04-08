import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionmasterCreateComponent } from './contributionmaster-create.component';

describe('ContributionmasterCreateComponent', () => {
  let component: ContributionmasterCreateComponent;
  let fixture: ComponentFixture<ContributionmasterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionmasterCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContributionmasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
