import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Employees } from './models/employees.models';
import { EmployeesService } from './service/employees.service';
import { state } from '@angular/animations';

import { EmployeesListComponent } from "./components/employees/employees-list/employees-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HttpClientModule, RouterModule, CommonModule, FormsModule, EmployeesListComponent,]
})
export class AppComponent {
  title = 'FullStackUI';
  filterString: any;
  
  @ViewChild(EmployeesListComponent) viewdata!:EmployeesListComponent;
  constructor(private employeeService: EmployeesService){}

  employeesCountry: Employees[]=[];
  employeesState: any[]=[];
 
  country:any
  
  ngOnInit(): void{
    this.employeeService.getCountry()
    .subscribe({
      next: (country)=>{
          this.employeesCountry = country;
      },
      error:(response)=>{
          console.log(response);
      }
    })
    
 }

 getState1(country:any){

  console.log(country.target.value);

  var ab=country.target.value;
  console.log(typeof(ab));

  this.employeeService.getState(ab)
        .subscribe({
          next: (state)=>{
            // debugger;
            console.log(state)
              this.employeesState = state;
          },
          error:(response)=>{
              console.log(response);
          }
        })
 }
 setState(state:any){
    this.filterString = state.target.value;
    this.viewdata.getdata(this.filterString)
    console.log(this.filterString)
 }
}
