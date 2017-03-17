import {Component} 		   from '@angular/core';
import { QwertyComponent } from '../qwerty/qwerty.component';
import { Counter } 		   from '../counter/counter.component';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
	public initialCount: number = 10;
}
