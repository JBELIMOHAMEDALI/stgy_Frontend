import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import swal from 'sweetalert';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CampingService {

  constructor(private httpClient: HttpClient, private modalService: NgbModal,private router: Router,) { }


  addCamping(obj: any) {

   return this.httpClient.post(environment.apiUrl +"addCamp", obj);
  }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  } 


  getAllCamping(id:string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id);
    return this.httpClient.get(environment.apiUrl + "campfromuser",{ params: param1 });
  }
  DeleteAll(id: string, point: any) {
    let param1 = new HttpParams;
     param1 = param1.set("id", id);
     return this.httpClient.delete(environment.apiUrl + `${point}`,{params : param1}).subscribe(
       
       {next:(data)=>{
         this.modalService.dismissAll();
         swal('Success', '', 'success');
       this.reloadComponent()
     },error:()=>{
       this.modalService.dismissAll();
           swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
     }});
   }

   updateCamp(obj:any,id)
   {
    return this.httpClient.put(environment.apiUrl+`upd_camp/${id}`,obj);
   } 


   getListCampForPartsipation()
   {
     return this.httpClient.get(environment.apiUrl+'viewcampetatact');
   }
   getOneCamping(id:string)
   {
     return this.httpClient.get(environment.apiUrl+`viewcampBayId/${id}`);
   }

}
