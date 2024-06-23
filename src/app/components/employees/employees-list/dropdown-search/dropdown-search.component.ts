import { Component, Output, ViewChild,EventEmitter } from '@angular/core';
import { EmployeesListComponent } from '../employees-list.component';
import { EmployeesService } from '../../../../service/employees.service';
import { Employees } from '../../../../models/employees.models';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dropdown-search',
    standalone: true,
    templateUrl: './dropdown-search.component.html',
    styleUrl: './dropdown-search.component.css',
    imports: [EmployeesListComponent,CommonModule]
})
export class DropdownSearchComponent {
  title = 'FullStackUI';
  filterString: any;

  @Output() dataupdateevent = new EventEmitter<string>();
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
    // this.viewdata.getdata(this.filterString)
    this.dataupdateevent.emit(state.target.value);
    console.log(this.filterString)
 }
}
