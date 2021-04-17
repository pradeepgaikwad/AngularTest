import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url="/assets/data/employee.json"
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError((error: HttpErrorResponse) =>{       
      return throwError(error.message  || 'Server Error, Please Retry After Sometime');    
                  }))
    ;
  }
}
