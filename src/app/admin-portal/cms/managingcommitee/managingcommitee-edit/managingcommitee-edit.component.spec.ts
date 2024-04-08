import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingcommiteeEditComponent } from './managingcommitee-edit.component';

describe('ManagingcommiteeEditComponent', () => {
  let component: ManagingcommiteeEditComponent;
  let fixture: ComponentFixture<ManagingcommiteeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingcommiteeEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagingcommiteeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
