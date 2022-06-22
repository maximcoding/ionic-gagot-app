import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {languageDirection} from '../../../app.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'mx-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss'],
})
export class UserAgreementComponent implements OnInit {

  public langDir = languageDirection;

  constructor(private translation: TranslateService, private modalCtrl: ModalController) {
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
