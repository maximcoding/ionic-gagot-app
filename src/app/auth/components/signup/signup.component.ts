import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {ICON_PATH} from '../../../../global';
import {languageDirection} from '../../../app.component';
import {UserAgreementComponent} from '../../../shared/components/user-agreement/user-agreement.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'mx-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public languageDirection = languageDirection;
  img: any;
  selectedTab = 1;
  showPassword = false;
  signUpType = 1;
  showConfirmPassword = false;
  selectedCountryCode = '🇫🇷 +33';
  public ICON_PATH = ICON_PATH;
  contryCode = [
    {countryName: 'Israel', code: '🇮🇱 +972', img: 'assets/flag/ISRAEL.jpeg'},
    {countryName: 'FRANCE', code: '🇫🇷 +33', img: 'assets/flag/FRANCE.png'},
    {countryName: 'USA', code: '🇺🇸 +1', img: 'assets/flag/USA.png'},
  ];

  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
    companyId: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService) {
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.selectedTab = ev.target.value;
  }

  toggleShow(): void {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPass(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  imagepload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event1: any) => {
        this.img = event1.target.result;
      };
    }
  }

  public onUserAgreement() {
    this.modalCtrl.create({
      component: UserAgreementComponent,
      componentProps: {}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

}
