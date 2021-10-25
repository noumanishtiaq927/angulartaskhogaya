import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NocodeapiCrudService {
  dataget = new Subject<any>();
  isAuth = true;
  id: any;
  url: string =
    'https://v1.nocodeapi.com/noumanishtiaq927/airtable/iAdleSYcXFZAUmiB?tableName=users';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        console.log(data);
        const datafields = data.records.map((data: any) =>
          data.fields ? data.fields : 'null'
        );
        const iddata = data.records.map((data: any) =>
          data.id ? data.id : 'null'
        );
        const profilePic = datafields.map((x: any) =>
          x.profilePic
            ? x.profilePic.map((x: any) => (x.url ? x.url : 'null'))
            : 'null'
        );
        const datageet = datafields.map((x: any, index: any) => ({
          ...x,
          id: iddata[index],
          pic: profilePic[index],
        }));
        console.log(datageet);
        this.dataget.next(datageet);
        return datageet;
      }),
      catchError((error) => {
        return throwError('data not found');
      })
    );
  }
  postData(datatopost: any): Observable<any> {
    const datapost = [datatopost];
    console.log(datatopost);
    console.log(datapost);
    return this.http.post(this.url, datapost);
  }
  updateData(datatopost: any, dataid: any): Observable<any> {
    const datapost = [{ id: dataid, fields: datatopost }];
    console.log(datatopost);
    console.log(datapost);
    console.log(dataid);
    return this.http.put(this.url, datapost);
  }
  findData(email: any, datato: any): Observable<any> {
    return this.http
      .get(this.url, {
        params: new HttpParams().set('fields', 'email'),
      })
      .pipe(
        map((data: any) => {
          const response = data.records.map((x: any) =>
            x.fields ? x.fields : 'null'
          );
          const responses = response.filter((x: any) => x.email === email);
          if (responses.length === 0) {
            return this.postData(datato).subscribe((data: any) => {
              return data;
            });
          } else {
            return new Error('email already exists');
          }
        })
      );
  }

  deleteData(id: string): Observable<any> {
    const ide: any = [id];
    return this.http.delete(this.url, {
      body: ide,
    });
  }
  login(email: any, password: any): Observable<any> {
    return this.http
      .get(this.url, {
        params: new HttpParams().set('fields', 'email,password'),
      })
      .pipe(
        map((data: any) => {
          const response = data.records.map((x: any) =>
            x.fields ? x.fields : 'null'
          );
          const responses = response.filter((x: any) => x.email === email);
          if (responses.length === 0) {
            return new Error('No email exists');
          } else {
            const result = responses.map((x: any) =>
              x.password === password
                ? true
                : new Error('password is incorrect')
            );
            return result[0];
          }
        })
      );
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.isAuth);
    });

    return promise;
  }
  singlegetdata(id: any): Observable<any> {
    return this.http
      .get(this.url, {
        params: new HttpParams().set('id', id),
      })
      .pipe(
        map((data: any) => {
          console.log(data);
          const response = data.fields;

          return response;
        })
      );
  }
}
