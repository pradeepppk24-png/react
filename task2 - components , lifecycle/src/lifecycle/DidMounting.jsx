import { Component } from "react";
export default class DidMounting extends Component{
  constructor(){

    super()

   this.state={
    employee:{
      name:"Pradeep",
      age:22,
    },
    salary:{
      lpa:250000,
    },

   }

  }

  componentDidMount(){

    setTimeout(()=>{
    this.setState(
      {
        employee:{
          ...this.state.employee,
          name:"monash",
        }
      }
    )},3000)
  }


  render(){
    return(

      <div>
      <p>Employee Name : {this.state.employee.name}</p>
      <p>Employee Age :{this.state.employee.age}</p>
      </div>
    )
  }

}