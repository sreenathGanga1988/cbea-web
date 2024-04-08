import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingcommiteeComponent } from './managingcommitee.component';

describe('ManagingcommiteeComponent', () => {
  let component: ManagingcommiteeComponent;
  let fixture: ComponentFixture<ManagingcommiteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingcommiteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagingcommiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
