import {Component} from '@angular/core';
import {Input} from '@angular/core';

import { Box } from './box.class';

@Component({
  selector: 'qwerty',
  styleUrls: ['./qwerty.component.css'],
  templateUrl: './qwerty.component.html',
  // providers: [Box],
})
export class QwertyComponent {
	public name: string = 'Иван Иваныч';

	public item = {
		id: 1,
		name: 'Hash item',
	}

	@Input() box: Box;

	// constructor(private box: Box){

	// }

	// ngOnInit(){
	// 	console.info('ngOnInit()');

	// 	this.box.width = 10;
	// 	this.box.height = 10;
	// 	this.box.depth = 20;
	// 	this.box.color = 'khaki';
	// }
}
