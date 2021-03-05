import { Injectable } from '@angular/core';
import {TodoItem} from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items:TodoItem[];

  constructor() {  this.items=[
    new TodoItem('Learn Angular'),
    new TodoItem('Learn Bootstrap ')];}

  getItems():TodoItem[]{
    return this.items;
  }
  getRemaining() {
    let count =0;
    this.items.forEach(value=>{count+=value.done ? 0:1
    });
    return count;
  }
  getTotalCount() {
    return this.items.length;

  }
  removeCompleted() {
    const newItem:TodoItem[]=[];
    this.items.forEach(value => {if(!value.done)
      newItem.push(value)
    })
    this.items=newItem;

  }
  addNew(item:TodoItem){

    this.items.push(item);
  }
}
