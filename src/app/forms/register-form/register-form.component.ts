import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  designation: string = '';
  department: string = '';
  gender: string = '';
  minDate: any = new Date();
  datapost = {
    lastName: 'allen',
    gender: 'male',
    mobile: 3461234567,
    password: 'flashisback',
    designation: 'coo',
    department: 'management',
    email: 'flash@gmail.com',
    dateOfJoining: '2021-01-19',
    address: 'central city\n\n',
    firstName: 'barry',
  };
  profilepic = [
    {
      url: 'https://dl.airtable.com/.attachments/420222d766f77d7c806adfcd666da7b7/e21c7500/1527078769-the-flash-season-4-finale.jpg',
    },
  ];
  @ViewChild('f') formdata: any;
  @ViewChild('fileuploade') fileuploadvar: ElementRef | undefined;
  errorregister: any;
  firstName: any;
  id: any;
  dar: any = {};
  constructor(
    private servicenocode: NocodeapiCrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.route);
    let id = this.route.snapshot.params.id;
    this.id = id;
    console.log(id);
    if (id) {
      this.servicenocode.singlegetdata(id).subscribe((data: any) => {
        this.dar = data;
      });
    }
  }

  ngOnInit(): void {
    // console.log(this.route);
    // let id = this.route.snapshot.params.id;
    // console.log(id);
    // if (id) {
    //   this.servicenocode.singlegetdata(id).subscribe((data: any) => {
    //     this.dar = data.records.map((x: any) => (x.fields ? x.fields : 'null'));
    //     console.log(this.dar);
    //   });
    // }
  }
  onSubmit() {
    if (typeof this.id !== 'string') {
      console.log(this.formdata.value);
      this.datapost.firstName = this.formdata.value.firstName
        .trim()
        .replace(/\s/g, '');
      this.datapost.lastName = this.formdata.value.lastName
        .trim()
        .replace(/\s/g, '');
      this.datapost.email = this.formdata.value.email
        .toLowerCase()
        .trim()
        .replace(/\s/g, '');
      this.datapost.password = this.formdata.value.password;
      this.datapost.department = this.formdata.value.department;
      this.datapost.designation = this.formdata.value.designation;
      this.datapost.dateOfJoining =
        this.formdata.value.dateOfJoining.toLocaleDateString();
      this.datapost.gender = this.formdata.value.gender;
      this.datapost.mobile = parseInt(this.formdata.value.mobile);
      this.datapost.address = this.formdata.value.address;

      console.log(this.datapost);

      this.servicenocode
        .findData(this.datapost.email, this.datapost)
        .subscribe((data) => {
          if (data.message && data) {
            this.errorregister = data.message;
          } else {
            this.servicenocode.isAuth = true;
            this.router.navigate(['/dashboard']);
          }
        });
    } else {
      this.servicenocode
        .updateData(this.datapost, this.id)
        .subscribe((data) => {
          console.log('update' + data);
        });
    }
    // this.servicenocode.postData(this.datapost).subscribe((data) => {
    //   console.log(data);
    // });
  }
  fileupload() {
    console.log(this.fileuploadvar?.nativeElement.files[0]);
  }
  getupload() {
    let id = document.getElementById('imageupload');
    id?.click();
  }
}
