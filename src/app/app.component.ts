import { Component } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: true },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];
  // to add items
  addItem(description: string) {
    if(description != '' && description != ' '){
    this.allItems.unshift({
      description,
      done: false
    });}
  }
  // to remove items
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

}
