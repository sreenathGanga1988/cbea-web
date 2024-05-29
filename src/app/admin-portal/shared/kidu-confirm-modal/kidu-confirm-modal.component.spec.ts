import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiduConfirmModalComponent } from './kidu-confirm-modal.component';

describe('KiduConfirmModalComponent', () => {
  let component: KiduConfirmModalComponent;
  let fixture: ComponentFixture<KiduConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KiduConfirmModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KiduConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
