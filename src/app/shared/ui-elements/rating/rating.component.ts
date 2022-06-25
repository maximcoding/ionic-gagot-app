import {Component, Input, OnInit} from '@angular/core';


export enum RatingStartType {
  full = 'star',
  half = 'star-half',
  empty = 'star-outline'
}
@Component({
  selector: 'mx-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  public starts = [];
  public RatingStartType = RatingStartType;
  private maxStars = 5;

  constructor() {
  }

  ngOnInit() {
    this.createElement();
  }

  private createElement() {
    this.starts = [];
    let i = 1;
    while (i <= this.rating) {
      this.starts.push(RatingStartType.full);
      i++;
    }
    if (this.rating < this.maxStars && this.rating % 1) {
      this.starts.push(RatingStartType.half);
    }
    let leftEmpty = Math.floor(this.maxStars - this.rating);
    if (leftEmpty) {
      while (leftEmpty) {
        this.starts.push(RatingStartType.empty);
        leftEmpty--;
      }
    }
  }

}
