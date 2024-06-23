import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeesService } from '../../../service/employees.service';
import { Employees } from '../../../models/employees.models';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{

    employeeDetails: Employees={
      id:'',
      name:'',
      email:'',
      phone:0,
      department:'',
      country:'',
      state:''
    }

     constructor(private route:ActivatedRoute,private employeeService: EmployeesService,private router:Router){}
     
     ngOnInit(): void {
         this.route.paramMap.subscribe({
           next:(params)=>{
              const id = params.get('id');
              if(id){
                this.employeeService.getEmployee(id).subscribe({
                  next:(response)=>{
                    this.employeeDetails=response;
                  }
                })
              }
           }
         })
     }

     updateEmployee(){
      this.employeeService.updateEmployee(this.employeeDetails.id,this.employeeDetails).subscribe({
          next:(response)=>{
            this.router.navigate(['employees'])
          }
      })
     }
     
     deleteEmployee(id:string){
      this.employeeService.deleteEmployee(id).subscribe({
          next:(response)=>{
            this.router.navigate(['employees'])
          }
      })
     }
}
