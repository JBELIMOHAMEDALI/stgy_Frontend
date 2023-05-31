import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { AddUpdateOffreCompanyComponent } from '../add-update-offre-company/add-update-offre-company.component';
import { InfoOffreCompanyComponent } from '../info-offre-company/info-offre-company.component';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { InfoSuggestionComponent } from '../info-suggestion/info-suggestion.component';
import { DecisionCompnyComponent } from '../decision-compny/decision-compny.component';
import { InfoDemandeComponent } from '../info-demande/info-demande.component';

@Component({
  selector: 'app-studentdemande',
  templateUrl: './studentdemande.component.html',
  styleUrls: ['./studentdemande.component.scss']
})
export class StudentdemandeComponent implements OnInit {
  listoffre: any[] = []
  listCampe: any[] = []
  p: number;
  term: any;
  id_projet: string = "-1";

  page = 1;
  pageSize = 5;
  pageSizes = [5,10,15];

  constructor(
    private serviceCamping:CampingService,
    public sahredserv:SharedService,
    private modalService: NgbModal,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router
    
    ) { }

  ngOnInit() {
    this.getAllCamping();
  }


  async getAllCamping()
  {
    this.backendService.get(`${environment.apiUrl +'/demonde/getDemondeForCompny'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
         this.listCampe = response;
      })
    );
  }
  openInfo(obj:any){
    console.log(obj);
    
    const modalRef = this.modalService.open(InfoDemandeComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.title = "Info Demande";
    modalRef.componentInstance.payload = obj;
    modalRef.componentInstance.type = "dem";


  }

  opendes(item) {
    const modalRef = this.modalService.open(DecisionCompnyComponent);
    modalRef.componentInstance.title = "Decision Demande";
    modalRef.componentInstance.type = "demond";
    modalRef.componentInstance.payload =item;;
  }

    handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
    }
}
