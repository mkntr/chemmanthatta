import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LegendComponent } from './legend/legend.component';
import { DeityComponent } from './deity/deity.component';
import { PoojaComponent } from './pooja/pooja.component';
import { DevaswomComponent } from './devaswom/devaswom.component';
import { FestivalComponent } from './festival/festival.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LegendComponent,
    DeityComponent,
    PoojaComponent,
    DevaswomComponent,
    FestivalComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
