import {Component} 		   from '@angular/core';
import { QwertyComponent } from '../qwerty/qwerty.component';
import { Counter } 		   from '../counter/counter.component';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
	public myCount: number = 10;

	countChange(ev) {
		console.info('AboutComponent.countChange('+ev+')');
		this.myCount = ev;
		console.info('this.myCount='+this.myCount);
	}
}
