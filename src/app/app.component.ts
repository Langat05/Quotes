import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quotes: Quote[] = [
    {id:1, name: 'I am a slow walker but i never walk backwards.',description: 'Written by Langat'},
    {id:2, name: 'Make a hey when the sun shines.', description:'Written by Lekiko'},
  ];
}
