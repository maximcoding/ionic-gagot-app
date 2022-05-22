import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ICON_PATH} from '../../../../global';
import {languageDirection} from '../../../app.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'mx-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public languageDirection = languageDirection;
  loginType = 1;
  public IMAGE_PATH = ICON_PATH;
  showPassword = false;
  selectedCountryCode = '🇫🇷 +33';
  public phoneOrEmail: string;
  inputFormCtrl = new FormControl('', Validators.required);
  contryCode = [
    {countryName: 'Israel', code: '🇮🇱 +972', img: 'assets/flag/ISRAEL.jpeg'},
    {countryName: 'FRANCE', code: '🇫🇷 +33', img: 'assets/flag/FRANCE.png'},
    {countryName: 'USA', code: '🇺🇸 +1', img: 'assets/flag/USA.png'},
  ];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  toggleShow(): void {
    this.showPassword = !this.showPassword;
  }

  numberOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public changeTypeLogin() {
    this.loginType = this.loginType === 1 ? 2 : 1;
  }

  public inputChange($event) {
    this.inputFormCtrl.setValue($event.detail.value);
    this.inputFormCtrl.markAsDirty();
    this.inputFormCtrl.updateValueAndValidity();
    this.phoneOrEmail = $event.detail.value;
  }
}
