import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'mx-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent implements OnInit {

  @Input() public hasError: boolean;
  @Input() public formControl: FormControl;
  public selectedCountryCode = '🇫🇷 +33';
  public phoneNumber: number;
  public contryCode = [
    {countryName: 'Israel', code: '🇮🇱 +972', img: 'assets/flag/ISRAEL.jpeg'},
    {countryName: 'FRANCE', code: '🇫🇷 +33', img: 'assets/flag/FRANCE.png'},
    {countryName: 'USA', code: '🇺🇸 +1', img: 'assets/flag/USA.png'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  public numberOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

  }

}
