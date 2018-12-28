import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
    <h2>Favorite</h2>

    <span class="fa" [class.fa-star]="isFavorite" [class.fa-star-half]="!isFavorite" (click)="spanClicked()"> </span>
  `,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  isFavorite: boolean;

  spanClicked() { 
    console.log("span was clicked");
    this.isFavorite = !this.isFavorite;
  }

}
