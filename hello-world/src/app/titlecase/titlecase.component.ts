import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlecase',
  template: `
    <h2>Title Case Converter</h2>
    <input [(ngModel)]="inText" (keyup)="convertCase()" type="text"><br>
    {{ inText | titlecase }}
  `,
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent {
  inText: string;
  
  convertCase() { 
    
  }

}
