import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {AddPropertyComponent} from '../add-property/add-property.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'map',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {
}


