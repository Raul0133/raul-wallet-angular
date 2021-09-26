import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaulWalletComponent } from './raul-wallet.component';

describe('RaulWalletComponent', () => {
  let component: RaulWalletComponent;
  let fixture: ComponentFixture<RaulWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaulWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaulWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
