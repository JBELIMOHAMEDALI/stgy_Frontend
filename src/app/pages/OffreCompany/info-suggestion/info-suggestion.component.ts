import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { SharedService } from './../../../service/shared.service';
// import{} from './../../../../assets'
@Component({
  selector: 'app-info-suggestion',
  templateUrl: './info-suggestion.component.html',
  styleUrls: ['./info-suggestion.component.scss']
})
export class InfoSuggestionComponent implements OnInit {
  @Input('title') title:string;
  @Input('type') type:string;
  @Input('payload') payload:any;
  constructor(public activeModal:NgbActiveModal,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router) { }

  ngOnInit() {
  }
  updateStatus(id_sug,status){
    let payload = {id:id_sug,status:status};
    this.backendService
    .post(`${environment.apiUrl}/suggestion/updateSuggestion`, payload)
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
    // alert(fileName)
     window.open('./../../../../assets/'+fileName);
}
}
