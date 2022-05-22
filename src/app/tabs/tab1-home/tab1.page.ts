import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {languageDirection} from '../../app.component';

@Component({
  selector: 'mx-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public isGridOpen = false;
  public isSortOpen = false;
  public languageDirection = languageDirection;

  constructor(public modalController: ModalController) {
  }

  public showChangeGrid() {
    this.isGridOpen = !this.isGridOpen;
  }

  public showSortModel() {
    this.isSortOpen = !this.isSortOpen;
  }

  public closeModal() {
    this.isGridOpen = false;
    this.isSortOpen = false;
  }


  public get checkBoxSlot() {
    return languageDirection === 'rtl' ? 'end' : 'start';
  }
}

