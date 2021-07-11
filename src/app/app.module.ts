import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from 'src/customer/customer.component';
import { HomeComponent } from 'src/home/home.component';
import { mastercomponent } from 'src/home/home.mastercomponent';
import { OurRoutes } from 'src/routes/app.mainroutes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    mastercomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(OurRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [mastercomponent]
})
export class AppModule { }
