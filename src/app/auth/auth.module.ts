import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OtpComponent } from './components/otp/otp.component';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

import {BrandLogoTitleComponent} from './components/brand-logo-title/brand-logo-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    MatInputModule,
    TranslateModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [AuthPage, LoginComponent, SignupComponent, OtpComponent, BrandLogoTitleComponent],
})
export class AuthPageModule {}
