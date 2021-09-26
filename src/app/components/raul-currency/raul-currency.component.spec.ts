import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaulCurrencyComponent } from './raul-currency.component';

describe('RaulCurrencyComponent', () => {
  let component: RaulCurrencyComponent;
  let fixture: ComponentFixture<RaulCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaulCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaulCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
