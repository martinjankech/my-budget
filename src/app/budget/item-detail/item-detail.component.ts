import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BudgetItemsService} from '../budget-items.service';
import {BudgetItem} from '../budget-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styles: [
  ]
})
export class ItemDetailComponent implements OnInit {
   item: BudgetItem;
  private itemId:string;



  constructor(private route:ActivatedRoute,private budgetItemService: BudgetItemsService) {
    this.itemId=this.route.snapshot.paramMap.get("id");
this.item=budgetItemService.getItem(this.itemId);

  }

  ngOnInit(): void {
  }

}

