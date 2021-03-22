import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../budget-item';
import {BudgetItemsService} from '../budget-items.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styles: [
  ]
})
export class NewItemComponent implements OnInit {
  newItem = {} as BudgetItem;
  constructor(private budgetItemsService: BudgetItemsService,
  private router: Router) { }

  submit():void {
    this.budgetItemsService.add(this.newItem);
    this.router.navigate(['/budget'])

  }
  ngOnInit(): void {
  }

}
