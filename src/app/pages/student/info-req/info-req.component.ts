import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-req',
  templateUrl: './info-req.component.html',
  styleUrls: ['./info-req.component.scss']
})
export class InfoReqComponent implements OnInit {
  @Input('title') title:string;
  @Input('type') type:string;
  @Input('payload') payload:any;
  constructor(public actifmodal:NgbActiveModal) { }

  ngOnInit() {
    console.log(this.payload);
    
  }

}
