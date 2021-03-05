import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {BudgetItem} from './budget-item';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {
  private key = 'budget-items';
  private items: BudgetItem[];

  constructor(private localStorageService: LocalStorageService) {
    this.items = localStorageService.get(this.key) || []



    }
  getItems()
  {
    return this.items
  }

  add(newItem: BudgetItem) {
    this.items.push(newItem);
    this.localStorageService.set(this.key,this.items)

  }
}


