import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { SharedService } from './../../../service/shared.service';

@Component({
  selector: 'app-info-demande',
  templateUrl: './info-demande.component.html',
  styleUrls: ['./info-demande.component.scss']
})
export class InfoDemandeComponent implements OnInit {
  @Input('title') title:string;
  @Input('type') type:string;
  @Input('payload') payload:any;
  constructor(public activeModal:NgbActiveModal,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router) { }

  ngOnInit() {
   console.log(this.payload);
    
  }
  updateStatus(id_sug,status){
    let payload = {id:id_sug,status:status};
    this.backendService
    .post(`${environment.apiUrl}/demonde/updateStatusDemonde`, payload)
    .subscribe(new Observer(
      this.router,// just un class dans angular
         null,//target : lin eli machilou
         true,//relode
         false,//swwet alert
         this.sharedService,//obligtour si ona reload
         this.activeModal
      ).OBSERVER_POST());

  }

  openFile(fileName) {
    // alert(JSON.stringify())
    window.open(fileName.cv);
}
}
