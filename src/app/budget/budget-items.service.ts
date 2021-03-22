import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {BudgetItem} from './budget-item';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  private key = 'budget-items';

  private items: BudgetItem[]

  private itemsSubject: BehaviorSubject<BudgetItem[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.items = localStorageService.get(this.key) || [];
    this.itemsSubject = new BehaviorSubject(this.items);
  }

  getItems() {
    return this.itemsSubject.asObservable();
  }

  add(newItem: BudgetItem) {
    this.items.push(newItem);
    this.localStorageService.set(this.key, this.items);
    this.itemsSubject.next(this.items);
  }

  delete(item: BudgetItem) {
    let index = this.items.findIndex(value => {
      return value === item;
    });

    if (index >= 0) {
      this.items.splice(index, 1);
      this.localStorageService.set(this.key, this.items);
      this.itemsSubject.next(this.items);
    }
  }

  getItem(itemId: string):BudgetItem {
    return this.items[itemId];

  }
}
