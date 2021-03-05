import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../budget-item';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styles: [
  ]
})
export class BudgetComponent implements OnInit {
  items: BudgetItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
