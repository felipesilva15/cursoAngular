import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {
  private savings: number = 10;
  private portfolio: number = 50;

  get getSavings(): number {
    return this.savings;
  }

  get getPortfolio(): number {
    return this.portfolio;
  }

  public setWithdraw(value: string): number | undefined {
    const withdraw = Number(value);
    
    if(isNaN(withdraw) || this.savings < withdraw) {
      return;
    }

    this.savings -= withdraw;
    return this.portfolio += withdraw;
  }

  public setDeposit(value: string): number | undefined  {
    const deposit = Number(value);
    
    if(isNaN(deposit) || this.portfolio < deposit) {
      return;
    }

    this.portfolio -= deposit;
    return this.savings += deposit;
  }
}
