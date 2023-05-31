import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-update-req',
  templateUrl: './add-update-req.component.html',
  styleUrls: ['./add-update-req.component.scss']
})
export class AddUpdateReqComponent implements OnInit {
  add = true;
  listCompny: any[] = []
  id_company=null;
  @Input() tit;
  @Input() obj;
  model: any = {}
  file: File = null;
  data: any;
  constructor(
    private backendService: BackendService,
    private servCamp: CampingService,
    public activeModal: NgbActiveModal,
    public sharedService: SharedService,

    public router: Router) {
    this.data = new FormData();
  }

  ngOnInit() {
    if (this.add) {
      this.model = {};
      if(this.tit === "Add suggestion"){this.getListCompny()}
    } else {
      this.model.titre = this.obj.titre;
      this.model.description = this.obj.description;
      this.model.enterpriseID = this.obj.enterpriseID;
      

    }
  }


  getListCompny()
  {
    const endpoint = environment.apiUrl+"/suggestion/getAllCompny"
    this.backendService.get(`${endpoint}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.listCompny = response;
        console.log(this.listCompny);
      })
    );
  }

  Onsubmit(form: NgForm) {

    if(this.add){
    let payload = { ...form.value,enterpriseID:this.id_company,StudentID:localStorage.getItem("id") };
    this.backendService
    .post(`${environment.apiUrl}/suggestion/add`, payload)
    .subscribe(new Observer(
      this.router,// just un class dans angular
         null,//target : lin eli machilou
         true,//relode
         true,//swwet alert
         this.sharedService,//obligtour si ona reload
         this.activeModal
      ).OBSERVER_POST());
    }
    //   let payload = { ...form.value,enterpriseID:localStorage.getItem("id"),id:this.obj._id};
    //   console.log(payload);
      
    //   let endpoint = `${environment.apiUrl}/offre/add`;
    //   this.backendService
    //   .post(`${environment.apiUrl}/offre/update`, payload)
    //   .subscribe(new Observer(
    //     this.router,// just un class dans angular
    //        null,//target : lin eli machilou
    //        true,//relode
    //        false,//swwet alert
    //        this.sharedService,//obligtour si ona reload
    //        this.activeModal
    //     ).OBSERVER_POST());
   
  }

  changeSelectedelement(values){
    this.id_company = values ;
  }
}
