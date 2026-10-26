import { useState } from "react";
import Children from "./child";
export default function Parent(){
  
  const[name,setName]=useState("pradeep")
  const[age,setAge]=useState(22)
  const[desgination,setDesignation]=useState("Full-Stack Developer")
  const[salary,setSalary]=useState({
    pc:1000,
    pnf:1000,
    hra:500,
    inhand:22500,
  }

  )

  return(
    <div>

      <h1>Parent Component</h1>

      <Children 

      name={name}
      age={age}
      desgination={desgination}
      salary={salary}
      />

    </div>
  )
}