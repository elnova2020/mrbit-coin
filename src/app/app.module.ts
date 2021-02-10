import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { WelcomeUserComponent } from './pages/welcome-user/welcome-user.component';
import { FilterArrayPipe } from './pipes/filter-array.pipe'
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactsPageComponent,
    ContactDetailsComponent,
    ChartComponent,
    ContactEditComponent,
    ContactFilterComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
    WelcomeUserComponent,
    FilterArrayPipe,
    StatisticsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
