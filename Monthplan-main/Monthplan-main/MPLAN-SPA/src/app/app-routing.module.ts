import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MplanMainComponent } from './domain-modules/components/mplan/mplan-main/mplan-main.component';

const routes: Routes = [
  {
    path: '',
    
    // runGuardsAndResolvers: 'always',
    canActivate: [],
    children: [ {
      path: 'MPLAN',
      loadChildren: () => import('./domain-modules/components/mplan/mplan.module').then((m) => m.MplanModule),
      
    },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
