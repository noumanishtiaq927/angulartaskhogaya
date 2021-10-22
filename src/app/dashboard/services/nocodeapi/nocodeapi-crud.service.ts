import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NocodeapiCrudService {
  id: any;
  url: string =
    'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.records.map((data: any) => {
          return data.fields;
        });
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
  findData(queryemail?: any, queryname?: any): Observable<any> {
    return this.http.get(this.url, {
      params: new HttpParams().set('fields', 'email'),
    });
  }
}
