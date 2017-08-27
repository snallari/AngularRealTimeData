import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // NgModel lives in formsmodule
import {FormsComponent} from './forms/forms.component';
import {HeroComponent} from './hero/hero.component';
import {HerodetailsComponent} from './herodetails/herodetails.component';
import {ListComponent} from './list/list.component';
import {ParentComponent} from './parent/parent.component';
import {ReactformsComponent} from './reactforms/reactforms.component';
import {SaiComponent} from './sai/sai.component';
import {UserComponent} from './user/user.component';
import {RouterModule} from '@angular/router';
import {RealdatalistComponent} from './realdatalist/realdatalist.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, ListComponent,
    FormsComponent,
    ReactformsComponent,
    HeroComponent,
    HerodetailsComponent,
    ParentComponent, UserComponent, SaiComponent, RealdatalistComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'reactforms',
        component: ReactformsComponent
      },
      {
        path: 'hero',
        component: HeroComponent
      },
      {
        path: 'parent',
        component: ParentComponent
      }, {
        path: 'user',
        component: UserComponent
      }, {
        path: 'sai',
        component: SaiComponent
      },
      {
        path: 'realdatalist',
        component: RealdatalistComponent
      }


    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
