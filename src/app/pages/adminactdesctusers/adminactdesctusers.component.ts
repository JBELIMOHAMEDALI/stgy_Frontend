import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../service/camping.service';
import { SharedService } from './../../service/shared.service';
import { BackendService } from '../../service/backend.service';
import Observer from '../../service/observer';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-adminactdesctusers',
  templateUrl: './adminactdesctusers.component.html',
  styleUrls: ['./adminactdesctusers.component.scss']
})
export class AdminactdesctusersComponent implements OnInit {
  listoffre: any[] = []
  listCampe: any[] = []
  p: number;
  term: any;
  page = 1;
  pageSize = 5;
  pageSizes = [5,10,15];
  authority
  constructor(
    private serviceCamping:CampingService,
    public sahredserv:SharedService,
    private modalService: NgbModal,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router
    
    ) { }

  ngOnInit() {
    // ;
  }


  async getListUsersBayauthorty(authorty)
  {
    this.backendService.get(`${environment.apiUrl +'/admin/getAllUsersBayAuthority'}/${authorty}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        console.log("-------------");
        
    console.log(response);
        // this.collectionSize=response.totalItems;
         this.listCampe = response.rows;
      })
    );
  }

  updateEtat(id,valid){

    swal({
      title: "Are you sure?",
      text: valid == true ?"You won't be able to activate this account !":"You won't be able to inactivate this account !",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["Cancel", "Confirm"],
    }).then((result) => {
      if (result) {
        const obj ={_id : id,valid : valid}
        const point =
        this.backendService
    .post(environment.apiUrl +"/admin/updateStatusStudentOrCopmny",obj)
    .subscribe(new Observer(
      this.router,// just un class dans angular
         null,//target : lin eli machilou
         true,//relode
         false,//swwet alert
         this.sharedService,//obligtour si ona reload
      ).OBSERVER_POST());
      }
    });



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

    changeOperation(value: string) {
      this.authority = value;
      this.getListUsersBayauthorty(this.authority)
    }
    handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
    }
}
