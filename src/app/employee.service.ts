import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    employee = [
        {id: 1,name: 'Priya', dept: 'Cse'},
        {id: 2,name: 'Samten', dept: 'Ca'},
        {id: 3,name: 'Neeha', dept: 'Eee'}
        
        ]
        getEmployee()
        {
            return this.employee
        }
        setEmployee(emp)
        {
            this.employee.push(emp)
        }
}