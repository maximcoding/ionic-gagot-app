import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'mx-brand-logo-title',
  templateUrl: './brand-logo-title.component.html',
  styleUrls: ['./brand-logo-title.component.scss'],
})
export class BrandLogoTitleComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
