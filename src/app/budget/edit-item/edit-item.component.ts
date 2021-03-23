import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BudgetItemsService} from '../budget-items.service';
import {BudgetItem} from '../budget-item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styles: [
  ]
})
export class EditItemComponent implements OnInit {
  private itemId: string;
   item: BudgetItem;

  constructor(  private route: ActivatedRoute,
                private budgetItemService: BudgetItemsService,
                private router:Router) {
    this.itemId = this.route.snapshot.paramMap.get("id");
    this.item=budgetItemService.getItem(this.itemId);
  }

  ngOnInit(): void {
  }

  submit() {
    this.budgetItemService.edit(this.itemId, this.item).subscribe(value => {

      this.router.navigate(['/budget',this.itemId]);

    })


  }
}