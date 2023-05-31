import { Component, OnInit } from '@angular/core';
import {   NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-offre',
  templateUrl: './all-offre.component.html',
  styleUrls: ['./all-offre.component.scss']
})
export class AllOffreComponent implements OnInit {
  listCampedispo: any[] = []
  listoffre: any[] = []
  constructor(private serviceCamping:CampingService, 
    public sahredserv:SharedService,
    private modalService: NgbModal,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router
    ) { }

  ngOnInit() {
    this.getlistffre()
  }
   getlistffre()
  {
    const endpoint = environment.apiUrl+"/offre/all"
    this.backendService.get(`${endpoint}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        
        // this.collectionSize=response.totalItems;
        this.listoffre = response;
        console.log(this.listoffre);
      })
    );
  }
  saveOffre(id_offre){
    let payload = { id_u:localStorage.getItem("id"),id_o:id_offre };
      this.backendService
      .post(`${environment.apiUrl}/offre/SaveOffreEtud`, payload)
      .subscribe(new Observer(
        this.router,// just un class dans angular
          null,//target : lin eli machilou
          true,//relode
          true,//swwet alert
          this.sharedService,//obligtour si ona reload
        ).OBSERVER_POST());
  }
  postuleOffre(id_offre,enterpriseID){
    let payload = {enterpriseID:enterpriseID, studentID:localStorage.getItem("id"),offreID:id_offre };
    console.log(id_offre);
    
      this.backendService
      .post(`${environment.apiUrl}/demonde/add`, payload)
      .subscribe(new Observer(
        this.router,// just un class dans angular
          null,//target : lin eli machilou
          true,//relode
          true,//swwet alert
          this.sharedService,//obligtour si ona reload
        ).OBSERVER_POST());
    
    
  
  
  }
  }

