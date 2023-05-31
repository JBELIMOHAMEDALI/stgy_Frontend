import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../../../service/backend.service';
import Observer from '../../../service/observer';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  authority: any;
  mayFile: any;
  paylodFormData: FormData;


  constructor(
    private backendService: BackendService,
    public router: Router
  ) {
    this.paylodFormData = new FormData();

  }

  ngOnInit() {
  }
  signup(form: NgForm) {

    let payload = { ...form.value };
    this.paylodFormData.append("email", payload.email);
    this.paylodFormData.append("password", payload.password);
    this.paylodFormData.append("authority", payload.authority);

    if (this.authority == 'Company') {

      console.log(payload)
      this.paylodFormData.append("companyDomain", payload.companyDomain);
      this.paylodFormData.append("companyName", payload.companyName);
    } else {
      this.paylodFormData.append("fullName", payload.fullName);
      this.paylodFormData.append("file", this.mayFile);
    }
    payload = this.paylodFormData ;
    this.backendService
      .post(`${environment.apiUrl}/auth/register`, payload)

      .subscribe(new Observer(
        this.router,
        "/signin",
        false,
        true
      ).OBSERVER_POST());
    // this.router.navigate(['log'])
  }
  changeOperation(value: string) {
    this.authority = value;
  }

  changeSelectedFile02(event) {
    this.mayFile = event.target.files[0];

  }
}
