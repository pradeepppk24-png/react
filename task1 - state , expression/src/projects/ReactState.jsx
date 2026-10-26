import { useState } from "react";
export default function ReactState(){
    const[EmployeeName,setEmployeeName]=useState("PRADEEP")
    const[EmployeeAge,setEmployeeAge]=useState(22)

    return(
        <>

        <div>
            <div className="h1">EMPLOYEE DETAILS</div><hr/>
        </div>
        <div>
            <span>EMPLOYEE NAME :</span>
            <span>{EmployeeName}</span>

        </div>

        <div>

            <span>EMPLOYEE AGE :</span>
            <span>{EmployeeAge}</span>

        </div>

        </>
    )
}