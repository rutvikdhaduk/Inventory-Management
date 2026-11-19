import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailysellingComponent } from './dailyselling.component';

describe('DailysellingComponent', () => {
  let component: DailysellingComponent;
  let fixture: ComponentFixture<DailysellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailysellingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailysellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
