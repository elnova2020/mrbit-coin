import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component'
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component'
import { WelcomeUserComponent } from './pages/welcome-user/welcome-user.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';


const routes: Routes = [
  {path: '',  component: WelcomeUserComponent },
  // {path: '', component: SignupComponent },
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'contacts/details/:id', component: ContactDetailsComponent},
  // {path: 'statistics', component: ChartComponent},
  {path: 'statistics', component: StatisticsPageComponent},
  {path: 'contacts/edit', component: ContactEditComponent},
  {path: 'edit/:id', component: ContactEditComponent},
  // {path: 'welcome', component: WelcomeUserComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
