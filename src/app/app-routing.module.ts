import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";


import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegComponent } from "./pages/auth/reg/reg.component";
import { ListOffreCompanyComponent } from "./pages/OffreCompany/list-offre-company/list-offre-company.component";
import { AllOffreComponent } from "./pages/student/all-offre/all-offre.component";
import { DetaillesOffreStudentComponent } from "./pages/student/detailles-offre-student/detailles-offre-student.component";
import { SavedOffreComponent } from "./pages/student/saved-offre/saved-offre.component";
import { MyDemandeComponent } from "./pages/student/my-demande/my-demande.component";
import { MyReqComponent } from "./pages/student/my-req/my-req.component";
import { StudentReqComponent } from "./pages/OffreCompany/student-req/student-req.component";
import { StudentdemandeComponent } from "./pages/OffreCompany/studentdemande/studentdemande.component";

const routes: Routes = [
  { path: "signin", component: LoginComponent },
  { path: "register", component: RegComponent },
  { path: "", component: LoginComponent },
  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: '', component: DashboardDefaultComponent
      },
      {
        path: 'CompanyOffre', component: ListOffreCompanyComponent
      },
      {
        path: 'all_Offre', component: AllOffreComponent
      },
      {
        path: 'detaillesOffreStudent/:id', component: DetaillesOffreStudentComponent
      },      {
        path: 'myregOffre', component: SavedOffreComponent
      },      {
        path: 'demandeOffre', component: MyDemandeComponent
      },     
      {
        path: 'mySuggestions', component: MyReqComponent
      },{
        path: 'studentSuggestions', component: StudentReqComponent
      },{
        path: 'studentDemande', component: StudentdemandeComponent
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
