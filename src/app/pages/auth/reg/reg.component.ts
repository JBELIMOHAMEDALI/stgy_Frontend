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
  authority : any ;
  constructor(
    private backendService: BackendService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  signup(form: NgForm) {
    const payload = { ...form.value,authority:this.authority};
     delete payload["pass2"];
    console.log(payload)

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
}
