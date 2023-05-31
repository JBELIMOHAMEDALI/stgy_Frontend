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
  selector: 'app-saved-offre',
  templateUrl: './saved-offre.component.html',
  styleUrls: ['./saved-offre.component.scss']
})
export class SavedOffreComponent implements OnInit {
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
    this.backendService.get(`${environment.apiUrl +'/offre/getOfferByStudentIdSave'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response.rows.saveOfferList);
        // this.collectionSize=response.totalItems;
         this.listCampe = response.rows.saveOfferList
         ;
      })
    );
  }

    // deleteFile(id) {
    //   swal({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this !",
    //     icon: "warning",
    //     closeOnEsc: true,
    //     closeOnClickOutside: true,
    //     buttons: ["Cancel", "Confirm"],
    //   }).then((result) => {
    //     if (result) {
    //       const point =environment.apiUrl +"/offre/delete"
    //       this.backendService
    //         .delete(`${point}/${id}`)
    //         .subscribe(
    //           new Observer(
    //             this.router,
    //             null,
    //             true,
    //             true,
    //             this.sharedService,
    //             null
    //           ).OBSERVER_DELETE()
    //         );
    //     }
    //   });
    // }
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
