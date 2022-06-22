import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddLocationComponent} from '../add-property/add-location/add-location.component';
import {AddPropertyDetailsComponent} from '../add-property/add-property-details/add-property-details.component';
import {AddRoomDetailsComponent} from '../add-property/add-room-details/add-room-details.component';
import {AddMediaComponent} from '../add-property/add-media/add-media.component';
import {AddPriceAndAgreementComponent} from '../add-property/add-price-and-agreement/add-price-and-agreement.component';
import {AddOpenDoorEventComponent} from '../add-property/add-open-door-event/add-open-door-event.component';
import {AddPropertyScreen} from '../add-property/add-property.component';

const addPropertyChildren = [{
  path: AddPropertyScreen.location,
  component: AddLocationComponent
}, {
  path: AddPropertyScreen.propertyDetails,
  component: AddPropertyDetailsComponent
}, {
  path: AddPropertyScreen.roomDetails,
  component: AddRoomDetailsComponent
}, {
  path: AddPropertyScreen.media,
  component: AddMediaComponent
}, {
  path: AddPropertyScreen.priceAndAgreement,
  component: AddPriceAndAgreementComponent
}, {
  path: AddPropertyScreen.openDoorEvent,
  component: AddOpenDoorEventComponent
}, {
  path: '',
  redirectTo: AddPropertyScreen.location,
  pathMatch: 'full'
}];

const routes: Routes = [{
  path: '', component: AddPropertyDetailsComponent,
  children: addPropertyChildren
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyDetailsRoutingModule {
}
