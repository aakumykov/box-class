import {Component} from '@angular/core';
import { QwertyComponent } from '../qwerty/qwerty.component';
import { Box } from '../qwerty/box.class';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
	constructor(public theBox: Box) {

	}

	ngOnInit(){
		console.info('ngOnInit()');

		this.theBox.width = 10;
		this.theBox.height = 10;
		this.theBox.depth = 20;
		this.theBox.color = 'khaki';
	}
}
