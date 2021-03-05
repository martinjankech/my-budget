import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {BudgetItem} from './budget-item';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {
  private key = 'budget-items';
  private items: BudgetItem[];
  private itemSubject;

  constructor(private localStorageService: LocalStorageService) {
    this.items = localStorageService.get(this.key) || []
    this.itemSubject=new BehaviorSubject(localStorageService.get(this.key)|| [])



    }
  getItems()
  {
    return this.itemSubject.asObservable();
  }

  add(newItem: BudgetItem) {
    this.items.push(newItem);
    this.localStorageService.set(this.key,this.items);
    this.itemSubject.next(this.items);

  }
}


