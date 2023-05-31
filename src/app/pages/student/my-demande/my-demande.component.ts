import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-my-demande',
  templateUrl: './my-demande.component.html',
  styleUrls: ['./my-demande.component.scss']
})
export class MyDemandeComponent implements OnInit {
  listoffre: any[] = []
  listCampe: any[] = []
  p: number;
  term: any;
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
    this.backendService.get(`${environment.apiUrl +'/demonde/getDemondeForStudent'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log((response));
    
        // this.collectionSize=response.totalItems;getOfferByStudentIdDemonde
         this.listCampe =response
         ;
      })
    );
  }

    unsaveOf(id) {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this !",
        icon: "warning",
        closeOnEsc: true,
        closeOnClickOutside: true,
        buttons: ["Cancel", "Confirm"],
      }).then((result) => {
        if (result) {
          const point =environment.apiUrl +"/offre/removeSavedOffre"
          this.backendService
            .delete(`${point}/${localStorage.getItem("id")}/${id}`)
            .subscribe(
              new Observer(
                this.router,
                null,
                true,
                true,
                this.sharedService,
                null
              ).OBSERVER_DELETE()
            );
        }
      });
    }

    handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
    }
}
