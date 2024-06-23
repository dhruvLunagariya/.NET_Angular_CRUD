import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, count } from 'rxjs';
import { Employees } from '../models/employees.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string =  environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getCountry():Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseApiUrl+'/api/employees/country');
  }

  getState(country:string):Observable<string[]>{ 
    // country.country = 'X'
    console.log(country);
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    return this.http.post<string[]>(this.baseApiUrl+'/api/employees/state',JSON.stringify(country),{headers});
  }


  getAllEmployee():Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseApiUrl+'/api/employees')
  }

  addEmployee(addEmployeeRequest: Employees):Observable<Employees>{
    addEmployeeRequest.id = ''
    return this.http.post<Employees>(this.baseApiUrl+'/api/employees',addEmployeeRequest)
  }
  getEmployee(id:string):Observable<Employees>{
    return this.http.get<Employees>(this.baseApiUrl+'/api/employees/'+id)
  }
  updateEmployee(id:string,updateEmployeeRequest:Employees):Observable<Employees>{
    return this.http.put<Employees>(this.baseApiUrl+'/api/employees/'+id,updateEmployeeRequest)
  }
  deleteEmployee(id: string):Observable<Employees>{
  return this.http.delete<Employees>(this.baseApiUrl+'/api/employees/'+id)
 }
}
