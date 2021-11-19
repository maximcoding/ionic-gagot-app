import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {TabsPageRoutingModule} from './tabs-routing.module';
import {TabsPage} from './tabs.page';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TranslateModule
  ],
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {
}
