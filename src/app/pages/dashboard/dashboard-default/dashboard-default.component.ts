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

  constructor(
    private backendService: BackendService,
    private sharedService: SharedService
  ) {
    this.nbrDemondeStudent = 0;
    this.nbrDemondeCompny = 0;
    this.nbrSuggsetionStudent = 0;
    this.nbrSuggsetionCompny = 0;
    this.nbrOffreCompny = 0;
  }

  ngOnInit() {
    this.userRole  =localStorage.getItem("authority") ;

    if(this.userRole == 'Company'){
this.countDemandeCompny();
this.countSuggestionCompny();
this.countOffreCompny();
    }
    else{
this.countDemandeStudent();
this.countSuggestionStudent();
    }

  }
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
