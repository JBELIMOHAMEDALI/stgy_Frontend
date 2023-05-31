import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-offre-company',
  templateUrl: './info-offre-company.component.html',
  styleUrls: ['./info-offre-company.component.scss']
})
export class InfoOffreCompanyComponent implements OnInit {
  @Input('title') title:string;
  @Input('type') type:string;
  @Input('payload') payload:any;
  constructor(public actifmodal:NgbActiveModal) { }

  ngOnInit() {
    console.log(this.payload);
    
  }

}
