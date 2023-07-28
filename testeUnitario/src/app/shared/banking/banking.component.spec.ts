import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investments/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getSavings: shoud have savings = 10', () => {
    expect(component.getSavings).toEqual(10);
  })

  it('(U) getSavings: shoud have portfolio = 50', () => {
    expect(component.getPortfolio).toEqual(50);
  });

  it('(U) setWithdraw(): shoud transfer savings from portfolio', () => {
    component.setWithdraw('10');

    expect(component.getSavings).toEqual(0);
    expect(component.getPortfolio).toEqual(60);
  });

  it('(U) setWithdraw(): shoud transfer savings dont have string (isNan) or savings < value', () => {
    expect(component.setWithdraw('String')).not.toBeTruthy();
    expect(component.setWithdraw('100')).not.toBeTruthy();
  });

  it('(I) setWithdraw(): shoud transfer portfolio from savings', () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-withdraw').value = '10';
    el.querySelector('#withdraw').click();

    fixture.detectChanges();

    expect(el.querySelector('#get-portfolio').textContent).toEqual('60');
  });

  it('(U) setDeposit(): shoud transfer portfolio from savings', () => {
    component.setDeposit('50');

    expect(component.getSavings).toEqual(60);
    expect(component.getPortfolio).toEqual(0);
  });

  it('(U) setDeposit(): shoud transfer portfolio dont have string (isNan) or portfolio < value', () => {
    expect(component.setDeposit('String')).not.toBeTruthy();
    expect(component.setDeposit('100')).not.toBeTruthy();
  });

  it('(I) setDeposit(): shoud transfer portfolio from savings', () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-deposit').value = '10';
    el.querySelector('#deposit').click();

    fixture.detectChanges();

    expect(el.querySelector('#get-savings').textContent).toEqual('20');
  });
});
