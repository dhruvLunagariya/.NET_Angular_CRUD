import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Employees } from '../../../models/employees.models';
import { EmployeesService } from '../../../service/employees.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

    addEmployeeRequest: Employees = {
      id:'',
      name:'',
      email:'',
      phone:0,
      department:'',
      country:'',
      state:''
    }

    constructor(private employeesService: EmployeesService,private router:Router){}
    
    addEmployee(){
        this.employeesService.addEmployee(this.addEmployeeRequest)
        .subscribe({
          next:(employee)=>{
           this.router.navigate(['employees'])
          }
        })
    }
}
