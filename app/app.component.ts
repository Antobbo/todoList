import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
                <h1>Hello. {{title}}</h1>
                <td-list></td-list>`,
  styles:['h1{text-align:center;}'
  ]
})
export class AppComponent  {
  title = 'Welcome to the to do list application.';

}
