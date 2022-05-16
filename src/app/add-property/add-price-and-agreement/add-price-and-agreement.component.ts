import {Component, Input, OnInit} from '@angular/core';
import {IProperty} from 'src/app/shared/interfaces/property.interface'
import {TextType} from '../../shared/ui-elements/text/text.component';
import {IMAGE_PATH} from '../../../global';
import {InputType} from '../../shared/ui-elements/input/input.component';

@Component({
  selector: 'mx-add-price-and-agreement',
  templateUrl: './add-price-and-agreement.component.html',
  styleUrls: ['./add-price-and-agreement.component.scss'],
})
export class AddPriceAndAgreementComponent implements OnInit {
  @Input() property: IProperty;

  public textType = TextType;
  public inputType = InputType;

  constructor() {
  }

  public options = [{name: "Euro", value: "euro"}, {name: "Dollar", value: "dollar"}]
  public items = [{
    img: IMAGE_PATH + 'sell.svg',
    name: "Sell"
  }, {
    img: IMAGE_PATH + 'rent.svg',
    name: "Rent"
  }]

  ngOnInit() {
  }

  public onCategorySelect($event) {
    this.property.category = $event;
  }

  public onCurrencyChange($event) {

  }

  public onVideoLinkInput($event) {
  }
}
