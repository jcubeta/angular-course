import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
    <h2>{{authors.length}} Authors</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors;
  authorCount;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }


}
