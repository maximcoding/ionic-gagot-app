import { Component, OnInit } from '@angular/core';
import {ICON_PATH} from '../../../../global';

@Component({
  selector: 'mx-otp-verification-success',
  templateUrl: './otp-verification-success.component.html',
  styleUrls: ['./otp-verification-success.component.scss'],
})
export class OtpVerificationSuccessComponent implements OnInit {

  public IMAGE_PATH = ICON_PATH;
  constructor() { }

  ngOnInit() {}

}
