import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})

export class Counter {

  @Input()
  count: number = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
  
}