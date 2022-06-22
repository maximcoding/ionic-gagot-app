import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {PropertyDetailsRoutingModule} from './property-details-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [],
  exports: [],
  imports: [
    PropertyDetailsRoutingModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    CommonModule,
    SharedModule
  ]
})
export class PropertyDetailsModule {
}
