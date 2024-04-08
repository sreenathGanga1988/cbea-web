import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingcommiteeCreateComponent } from './managingcommitee-create.component';

describe('ManagingcommiteeCreateComponent', () => {
  let component: ManagingcommiteeCreateComponent;
  let fixture: ComponentFixture<ManagingcommiteeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingcommiteeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagingcommiteeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
