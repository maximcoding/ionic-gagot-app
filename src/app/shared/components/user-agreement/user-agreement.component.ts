import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {languageDirection} from '../../../app.component';

@Component({
  selector: 'mx-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss'],
})
export class UserAgreementComponent implements OnInit {

  public langDir = languageDirection;
  constructor(private modalCtrl: ModalController) {
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
