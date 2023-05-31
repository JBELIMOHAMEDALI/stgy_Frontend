import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { SharedService } from './../../../service/shared.service';

@Component({
  selector: 'app-decision-compny',
  templateUrl: './decision-compny.component.html',
  styleUrls: ['./decision-compny.component.scss']
})
export class DecisionCompnyComponent implements OnInit {
  @Input('title') title:string;
  @Input('type') type:string;
  @Input('payload') payload:any;
  endpoint : any ;
  payloadEnd:any;
  constructor(public activeModal:NgbActiveModal,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router) { }

  ngOnInit() {
  }
  updateStatus(id_sug,status){
    if(this.type == 'req'){
    this.payloadEnd = {id:id_sug,status:status};
    this.endpoint = `${environment.apiUrl}/suggestion/updateSuggestion` ;
  }else{
    this.payloadEnd = {id:this.payload._id,status:status};
    this.endpoint = `${environment.apiUrl}/demonde/updateStatusDemonde` ;
  }
    this.backendService
    .post(this.endpoint,this.payloadEnd)
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
