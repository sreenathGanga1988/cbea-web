import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontributionComponent } from './mycontribution.component';

describe('MycontributionComponent', () => {
  let component: MycontributionComponent;
  let fixture: ComponentFixture<MycontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycontributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
