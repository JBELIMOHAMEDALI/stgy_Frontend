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
import swal from 'sweetalert';

@Component({
  selector: 'app-list-offre-company',
  templateUrl: './list-offre-company.component.html',
  styleUrls: ['./list-offre-company.component.scss']
})
export class ListOffreCompanyComponent implements OnInit {
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
    const endpoint= "offre/getOffreBayCompany"
    this.backendService.get(`${environment.apiUrl +'/offre/getOffreBayCompany'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
        // this.collectionSize=response.totalItems;
         this.listCampe = response.rows;
      })
    );
  }
  open(){

      const modalRef = this.modalService.open(AddUpdateOffreCompanyComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.add = true;
      modalRef.componentInstance.tit = "Add Offre";
    }
    openUpd(obj:any){

      const modalRef = this.modalService.open(AddUpdateOffreCompanyComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.add = false;
      modalRef.componentInstance.obj = obj;
      modalRef.componentInstance.tit = "Update Offre";
    }

    openInfo(obj:any){
      const modalRef = this.modalService.open(InfoOffreCompanyComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.title = "Info Offre";
      modalRef.componentInstance.payload = obj;

    }

    deleteFile(id) {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this !",
        icon: "warning",
        closeOnEsc: true,
        closeOnClickOutside: true,
        buttons: ["Cancel", "Confirm"],
      }).then((result) => {
        if (result) {
          const point =environment.apiUrl +"/offre/delete"
          this.backendService
            .delete(`${point}/${id}`)
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
    
    // deleteFile(id_file: string,id_tiket:string) {
    //   swal({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this !",
    //     icon: "warning",
    //     closeOnEsc: true,
    //     closeOnClickOutside: true,
    //     buttons: ["Cancel", "Confirm"],
    //   }).then((result) => {
    //     if (result) {
    //       this.backendService
    //         .delete(`${DELETE_FILE_FOR_TICKET_ADMIN_END_POINT}/${id_file}/${id_tiket}`)
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
    




    handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
    }
}
