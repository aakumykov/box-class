import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})

export class Counter {

  @Input()
  count: number;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  
  increment() { 
  	this.count++;
  	this.change.emit(this.count);
  }
  
  decrement() { 
  	this.count--;
  	this.change.emit(this.count);
  } 
}