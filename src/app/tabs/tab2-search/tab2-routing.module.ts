import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tab2Page} from './tab2.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../filters/filters.module').then(m => m.FiltersModule)
  }, {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {
}

