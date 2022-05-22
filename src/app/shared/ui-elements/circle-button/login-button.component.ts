import {Component, Input, OnInit} from '@angular/core';
import {ICON_PATH} from '../../../../global';
import {languageDirection} from '../../../app.component';

@Component({
  selector: 'mx-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent implements OnInit {

  public path = ICON_PATH;
  public languageDirection = languageDirection;
  @Input() title: string;
  @Input() disabled: boolean;
  constructor() {
  }

  ngOnInit() {
  }

}
