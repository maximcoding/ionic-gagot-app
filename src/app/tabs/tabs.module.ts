import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        TranslateModule,
        SharedModule
    ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
