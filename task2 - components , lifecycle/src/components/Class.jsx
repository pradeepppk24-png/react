import { Component } from "react";
export default class Class extends Component{

  constructor(){
    super()

    this.state={
      employeeName:"pradeep",
      employeeId:111,
      employeeAge:22,
      employeeCity:"chennai",
      employeeSalary:25000
    }
  }


  render(){

    return(
      <>
      <div>
        Employee Details<hr />
      </div>

      <div>
        <span>Employee Name :</span>
        <span>{this.state.employeeName}</span>
      </div>

      <div>
        <span>Employee ID :</span>
        <span>{this.state.employeeId}</span>
      </div>

      <div>
        <span>Employee Age :</span>
        <span>{this.state.employeeAge}</span>
      </div>

      <div>
        <span>Employee City :</span>
        <span>{this.state.employeeCity}</span>
      </div>

      <div>
        <span>Employee Salary :</span>
        <span>{this.state.employeeSalary}</span>
      </div>
      </>
    )
  }
}