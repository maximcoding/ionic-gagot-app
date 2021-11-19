import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from '../../interfaces/category.interface';

@Component({
  selector: 'mx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {


  @Input() categories: ICategory[];

  constructor() {
  }

  ngOnInit() {
  }

}
