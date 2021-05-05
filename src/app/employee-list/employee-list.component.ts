import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   employees=[];
   errors;
  constructor(private _service : EmployeeService) { }
@Input() readonly: Boolean;
@Input() compute: Boolean;
@Output() public myName =new EventEmitter<String>(); 

  ngOnInit(): void {
    this._service.getEmployees()
    .subscribe(
      data => this.employees=data,
      error => this.errors=error);
      console.log('Array',this.employees);
      this.employees=this.employees.filter(i=>i.Name!=='Pradeep');
      this.myName.emit("Hello Pradeep");
  }

  HandleClick(){
    this.employees=this.employees.filter(i=>i.Name!=='Pradeep');
    console.log('Hello');
    console.log('Array',this.employees);
  }
}
