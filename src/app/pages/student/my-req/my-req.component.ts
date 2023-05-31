import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AddUpdateReqComponent } from '../add-update-req/add-update-req.component';
import { InfoReqComponent } from '../info-req/info-req.component';

@Component({
  selector: 'app-my-req',
  templateUrl: './my-req.component.html',
  styleUrls: ['./my-req.component.scss']
})
export class MyReqComponent implements OnInit {
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
    this.getMaySuggestion();
  }
  async getMaySuggestion()
  {
    // /:id
    this.backendService.get(`${environment.apiUrl +'/suggestion/getAllSuggestionForStudent'}/`+localStorage.getItem("id")).subscribe(
      new Observer().OBSERVER_GET((response) => {
        // this.collectionSize=response.totalItems;
        this.listCampe = response.rows;
        console.log(this.listCampe);
      })
    );
  }
  open(){

      const modalRef = this.modalService.open(AddUpdateReqComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.add = true;
      modalRef.componentInstance.tit = "Add suggestion";

    }
    openUpd(obj:any){

      const modalRef = this.modalService.open(AddUpdateReqComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.add = false;
      modalRef.componentInstance.obj = obj;
      modalRef.componentInstance.tit = "Update Offre";
    }

    openInfo(obj:any){
      const modalRef = this.modalService.open(InfoReqComponent, { size: 'lg', backdrop: 'static' });
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
          const point =environment.apiUrl +"/suggestion/delete"
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
    handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
    }
}
