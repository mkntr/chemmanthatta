import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { DeityComponent } from './deity/deity.component';
import { DevaswomComponent } from './devaswom/devaswom.component';
import { FestivalComponent } from './festival/festival.component';
import { HomeComponent } from './home/home.component';
import { LegendComponent } from './legend/legend.component'
import { PoojaComponent } from './pooja/pooja.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path:'legend', component:LegendComponent },
  { path:'deity', component:DeityComponent },
  { path:'pooja', component:PoojaComponent },
  { path:'devaswom', component:DevaswomComponent },
  { path:'festival', component:FestivalComponent },
  { path:'connect', component:ConnectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }