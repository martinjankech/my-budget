import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../budget-item';
import {BudgetItemsService} from '../budget-items.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styles: [
  ]
})
export class BudgetComponent implements OnInit {
  items: BudgetItem[];
  newItem={} as BudgetItem;

  constructor(private budgetPrivateService: BudgetItemsService) { }

  ngOnInit(): void {
  }

  submit() {
    this.budgetPrivateService.add(this.newItem)

  }
}
