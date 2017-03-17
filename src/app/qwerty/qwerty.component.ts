import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'qwerty',
  styleUrls: ['./qwerty.component.css'],
  templateUrl: './qwerty.component.html',
})
export class QwertyComponent {
	public name: string = 'Иван Иваныч';

	public item = {
		id: 1,
		name: 'Hash item',
	}
}
