import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { InfoSuggestionComponent } from '../info-suggestion/info-suggestion.component';
import { DecisionCompnyComponent } from '../decision-compny/decision-compny.component';

@Component({
  selector: 'app-student-req',
  templateUrl: './student-req.component.html',
  styleUrls: ['./student-req.component.scss']
})
export class StudentReqComponent implements OnInit {
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
    this.getListSuggestion();
  }


  async getListSuggestion()
  {
    this.backendService.get(`${environment.apiUrl +'/suggestion/getAllSuggestionForCompny'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
         this.listCampe = response.rows;
      })
    );
  }
  // open(){

  //     const modalRef = this.modalService.open(AddUpdateOffreCompanyComponent, { size: 'lg', backdrop: 'static' });
  //     modalRef.componentInstance.add = true;
  //     modalRef.componentInstance.tit = "Add Offre";
  //   }
    // openUpd(obj:any){

    //   const modalRef = this.modalService.open(AddUpdateOffreCompanyComponent, { size: 'lg', backdrop: 'static' });
    //   modalRef.componentInstance.add = false;
    //   modalRef.componentInstance.obj = obj;
    //   modalRef.componentInstance.tit = "Update Camping";
    // }

    openInfo(obj:any){
      const modalRef = this.modalService.open(InfoSuggestionComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.title = "Info Suggestion";
      modalRef.componentInstance.payload = obj;

    }

    opendes(item) {
      const modalRef = this.modalService.open(DecisionCompnyComponent);
      modalRef.componentInstance.title = "Decision Suggestion";
      modalRef.componentInstance.type = "req";
      modalRef.componentInstance.payload =item;;
    }
    handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
    }
}
