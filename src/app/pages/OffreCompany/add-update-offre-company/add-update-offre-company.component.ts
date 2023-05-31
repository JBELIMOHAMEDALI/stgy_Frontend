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
  selector: 'app-add-update-offre-company',
  templateUrl: './add-update-offre-company.component.html',
  styleUrls: ['./add-update-offre-company.component.scss'],
})
export class AddUpdateOffreCompanyComponent implements OnInit {
  add = true;
  @Input() tit;
  @Input() obj;
  model: any = {}
  file: File = null;
  data: any;
  constructor(
    private servCamp: CampingService,
    public activeModal: NgbActiveModal,
    public sharedService: SharedService,
    
    private backendService: BackendService,
    public router: Router) {
    this.data = new FormData();
  }

  ngOnInit() {
    if (this.add) {
      this.model = {};
    } else {
      this.model.titre = this.obj.titre;
      this.model.description = this.obj.description;
      this.model.dateDebut = this.obj.dateDebut;
      this.model.dateFin = this.obj.dateFin;
      this.model.email = this.obj.email;
      this.model.tel = this.obj.tel;
      this.model.requirement = this.obj.requirement;

    }
  }

  Onsubmit(form: NgForm) {

    if(this.add){
    let payload = { ...form.value,enterpriseID:localStorage.getItem("id") };
    // let endpoint = `${environment.apiUrl}/offre/add`;
    this.backendService
    .post(`${environment.apiUrl}/offre/add`, payload)
    .subscribe(new Observer(
      this.router,// just un class dans angular
         null,//target : lin eli machilou
         true,//relode
         true,//swwet alert
         this.sharedService,//obligtour si ona reload
         this.activeModal
      ).OBSERVER_POST());
    }else{
      let payload = { ...form.value,enterpriseID:localStorage.getItem("id"),id:this.obj._id};
      console.log(payload);
      this.backendService
      .post(`${environment.apiUrl}/offre/update`, payload)
      .subscribe(new Observer(
        this.router,// just un class dans angular
           null,//target : lin eli machilou
           true,//relode
           false,//swwet alert
           this.sharedService,//obligtour si ona reload
           this.activeModal
        ).OBSERVER_POST());
    }

   



  }




}
