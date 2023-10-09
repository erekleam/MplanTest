import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MplanMainComponent } from './mplan-main/mplan-main.component';

const routes: Routes = [
  {
    path: '',
        canActivate: [],
        children: [
            { path: 'MPLAN', component: MplanMainComponent, pathMatch: 'full'},
        ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MplanRoutingModule { }
