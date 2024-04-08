import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingcommiteeListComponent } from './managingcommitee-list.component';

describe('ManagingcommiteeListComponent', () => {
  let component: ManagingcommiteeListComponent;
  let fixture: ComponentFixture<ManagingcommiteeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingcommiteeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagingcommiteeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
