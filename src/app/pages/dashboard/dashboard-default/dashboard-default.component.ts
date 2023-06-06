import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../../service/backend.service";
import { SharedService } from "../../../service/shared.service";
import swal from "sweetalert";
import Observer from "../../../service/observer";
import { environment } from '../../../../environments/environment';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.scss',
    '../../../../assets/icon/svg-animated/svg-weather.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {
  nbrDemondeStudent: any;
  nbrDemondeCompny: any;
  nbrSuggsetionStudent: any;
  nbrSuggsetionCompny: any;
  nbrOffreCompny: any;
  userRole 


  adminNbroffre
  adminNbrdadmin
  adminNbrsugsetion
  adminNbractiveAcount
  adminNbrInctiveAccountemonde

  constructor(
    private backendService: BackendService,
    private sharedService: SharedService
  ) {
    this.nbrDemondeStudent = 0;
    this.nbrDemondeCompny = 0;
    this.nbrSuggsetionStudent = 0;
    this.nbrSuggsetionCompny = 0;
    this.nbrOffreCompny = 0;

    this.adminNbroffre = 0 ;
    this.adminNbrdadmin = 0;
    this.adminNbrsugsetion= 0 ;
    this.adminNbractiveAcount= 0 ;
    this.adminNbrInctiveAccountemonde = 0 ;

  }

  ngOnInit() {
    this.userRole  =localStorage.getItem("authority") ;

    if(this.userRole == 'Company'){
this.countDemandeCompny();
this.countSuggestionCompny();
this.countOffreCompny();
    }
    else if(this.userRole == 'Student'){
this.countDemandeStudent();
this.countSuggestionStudent();
    }else{
this.countAccountByValid(true);
this.countAccountByValid(false);
this.countAllDemande();
this.countAllOffre();
this.countAllSuggestion();
    }

  }


  // -------------------------------------------------------------------------
  countAccountByValid(valide) {
    this.backendService.get(`${environment.apiUrl +'/admin/countAccountByValid'}/${valide}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        if(valide == true ) {        this.adminNbractiveAcount = response.rows.count;}
        if(valide == false ) {        this.adminNbrInctiveAccountemonde = response.rows.count;}

      })
    );
  }
  countAllDemande() {
    this.backendService.get(`${environment.apiUrl +'/admin/countAllDemande'}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.adminNbrdadmin = response.rows.count;
      })
    );
  }
// ----------------------------------
countAllOffre() {
    this.backendService.get(`${environment.apiUrl +'/admin/countAllOffre'}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.adminNbroffre = response.rows.count;
      })
    );
  }
  countAllSuggestion() {
    this.backendService.get(`${environment.apiUrl +'/admin/countAllSuggestion'}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.adminNbrsugsetion = response.rows.count;
      })
    );
  }















  // --------------------------------------------------------------------------
  countDemandeStudent() {
    this.backendService.get(`${environment.apiUrl +'/dashbooard/countDemandeStudent'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.nbrDemondeStudent = response.rows.count;
      })
    );
  }
  countDemandeCompny() {
    this.backendService.get(`${environment.apiUrl +'/dashbooard/countDemandeCompny'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.nbrDemondeCompny = response.rows.count;
      })
    );
  }
// ----------------------------------
  countSuggestionStudent() {
    this.backendService.get(`${environment.apiUrl +'/dashbooard/countSuggestionStudent'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.nbrSuggsetionStudent = response.rows.count;
      })
    );
  }
  countSuggestionCompny() {
    this.backendService.get(`${environment.apiUrl +'/dashbooard/countSuggestionCompny'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.nbrSuggsetionCompny = response.rows.count;
      })
    );
  }
// -----------------------------------
  countOffreCompny() {
    this.backendService.get(`${environment.apiUrl +'/dashbooard/countOffreCompny'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
        this.nbrOffreCompny = response.rows.count;
      })
    );
  }
}
