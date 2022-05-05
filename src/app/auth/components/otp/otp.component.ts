import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mx-app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {

  OTP: any;

  @Input() phoneNumber: string = '+972-54-655-6585';

  otpController(event: any, next: any, prev: any) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      return 0;
    }
  }

  numberOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public resend() {

  }

  constructor() {
  }

  ngOnInit() {
  }
}
