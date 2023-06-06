import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NgxPrintModule} from 'ngx-print';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegComponent } from './pages/auth/reg/reg.component';
import { ListOffreCompanyComponent } from './pages/OffreCompany/list-offre-company/list-offre-company.component';
import { AddUpdateOffreCompanyComponent } from './pages/OffreCompany/add-update-offre-company/add-update-offre-company.component';
import { InfoOffreCompanyComponent } from './pages/OffreCompany/info-offre-company/info-offre-company.component';
import { AllOffreComponent } from './pages/student/all-offre/all-offre.component';
import { SavedOffreComponent } from './pages/student/saved-offre/saved-offre.component';
import { MyDemandeComponent } from './pages/student/my-demande/my-demande.component';
import { StudentdemandeComponent } from './pages/OffreCompany/studentdemande/studentdemande.component';
import { StudentReqComponent } from './pages/OffreCompany/student-req/student-req.component';
import { MyReqComponent } from './pages/student/my-req/my-req.component';
import { DetaillesOffreStudentComponent } from './pages/student/detailles-offre-student/detailles-offre-student.component';
import { AddUpdateReqComponent } from './pages/student/add-update-req/add-update-req.component';
import { InfoReqComponent } from './pages/student/info-req/info-req.component';
import { InfoSuggestionComponent } from './pages/OffreCompany/info-suggestion/info-suggestion.component';
import { DecisionCompnyComponent } from './pages/OffreCompany/decision-compny/decision-compny.component';
import { InfoDemandeComponent } from './pages/OffreCompany/info-demande/info-demande.component';
import { AdminactdesctusersComponent } from './pages/adminactdesctusers/adminactdesctusers.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardDefaultComponent,
    SimplePageComponent,
    HomePageComponent,
    ProfileComponent,
    PopupComponent,
    LoginComponent,
    RegComponent,
    ListOffreCompanyComponent,
    AddUpdateOffreCompanyComponent,
    InfoOffreCompanyComponent,
    AllOffreComponent,
    SavedOffreComponent,
    MyDemandeComponent,
    StudentdemandeComponent,
    StudentReqComponent,
    MyReqComponent,
    DetaillesOffreStudentComponent,
    AddUpdateReqComponent,
    InfoReqComponent,
    InfoSuggestionComponent,
    DecisionCompnyComponent,
    InfoDemandeComponent,
    AdminactdesctusersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxPrintModule
  ],

  entryComponents: [InfoDemandeComponent,DecisionCompnyComponent,PopupComponent,AddUpdateOffreCompanyComponent,InfoSuggestionComponent,InfoOffreCompanyComponent,AddUpdateReqComponent,InfoReqComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
