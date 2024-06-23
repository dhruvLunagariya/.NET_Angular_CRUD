import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employees } from '../../../models/employees.models';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../service/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from "../../../Pipes/filter.pipe";
import { DropdownSearchComponent } from "./dropdown-search/dropdown-search.component";

@Component({
    selector: 'app-employees-list',
    standalone: true,
    templateUrl: './employees-list.component.html',
    styleUrl: './employees-list.component.css',
    imports: [CommonModule, HttpClientModule, RouterModule, FilterPipe, DropdownSearchComponent]
})
export class EmployeesListComponent {
updateData(data: string) {
    console.log(data);
}

   employees: Employees[]=[];
  filterString: string='';
  

 
   constructor(private employeeService: EmployeesService){}
   
   ngOnInit(): void{
      this.employeeService.getAllEmployee()
      .subscribe({
        next: (employees)=>{
          console.log(this.filterString)
            this.employees = employees;
        },
        error:(response)=>{
            console.log(response);
        }
      })
   }
   getdata(data:any){
    
      this.filterString = data;
   }
}
