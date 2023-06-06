import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { BackendService } from "../../../service/backend.service";
import Observer from "../../../service/observer";
import { SharedService } from "../../../service/shared.service";
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private backendService: BackendService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
  }
  login(form: NgForm) {
    const payload = { ...form.value };
    // console.log(payload);
    // try{},caches{}
    this.backendService.post(`${environment.apiUrl}/auth/login`, payload).subscribe(
      new Observer(this.router, "/dashboard", false).OBSERVER_SIGNIN(
        (response: any) => {

          const user = response.payload
          this.sharedService.setItem("email", user.email);//authority
          this.sharedService.setItem("authority", user.authority);//
          this.sharedService.setItem("id", user._id);
          if(user.companyDomain){this.sharedService.setItem("companyDomain", user.companyDomain);}
          if(user.companyName){this.sharedService.setItem("companyName", user.companyName);}
          if(user.fullName){this.sharedService.setItem("fullName", user.fullName);}//


        }
      )
    );





  }
}
