import {Component, OnInit} from '@angular/core';
import {BudgetItem} from './budget-item';
import {BudgetItemsService} from './budget-items.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
})
export class BudgetComponent implements OnInit {

  items$: Observable<BudgetItem[]>;



  constructor(private budgetItemsService: BudgetItemsService) {
    this.items$ = budgetItemsService.getItems()
  }

  ngOnInit(): void {
  }



  deleteItem(item: BudgetItem) {
    this.budgetItemsService.delete(item).then(value => {});
  }
}
