import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-detailles-offre-student',
  templateUrl: './detailles-offre-student.component.html',
  styleUrls: ['./detailles-offre-student.component.scss']
})
export class DetaillesOffreStudentComponent implements OnInit {
  offre: any;
  id:any
  constructor(private serviceCamping:CampingService, 
    public sahredserv:SharedService,
    private modalService: NgbModal,
    private backendService: BackendService,
    private route: ActivatedRoute
    ) { 
      this.id=this.route.snapshot.paramMap.get("id");
    }
  ngOnInit() {
    this.getOffre(this.id)
  }
  getOffre(id_offre)
  { 
    const endpoint = environment.apiUrl+"/offre/getone"
    this.backendService.get(`${endpoint}/${id_offre}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.offre = response;
        console.log(this.offre);
      })
    );
  }
}
