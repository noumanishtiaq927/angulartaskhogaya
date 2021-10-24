import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  noerror: any;
  errorlogin: any;
  constructor(
    private nocrudapi: NocodeapiCrudService,
    private router: Router
  ) {}
  @ViewChild('signin') formvalue: any;
  ngOnInit(): void {}
  Signin() {
    console.log(this.formvalue.value.email);
    console.log(this.formvalue.value.password);
    this.nocrudapi
      .login(this.formvalue.value.email, this.formvalue.value.password)
      .subscribe((data) => {
        if (data.message) {
          this.errorlogin = data.message;
        } else {
          this.nocrudapi.isAuth = true;
          this.router.navigate(['/dashboard']);
        }
      });
    // this.nocrudapi.isAuth = true;
    // this.router.navigate(['/dashboard']);
  }
}
