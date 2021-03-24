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

  submit($event):void {
    this.budgetItemsService.add($event).then(value =>
    {this.router.navigate(['/budget']).then(value1 => {console.log(value)})})





  }
  ngOnInit(): void {
  }

}
