import { useState } from "react";
export default function Expression1(){
  const[Marks,setMarks]=useState(90)

  return(

    <>
    <div>
      marks : {Marks}
    </div>

    <div>
      {Marks>90
      ? "Grade A"
      : Marks>75
      ? "Grade B"
      : Marks>60
      ? "Grade C"
      : Marks>40
      ? "Grade D"
      : "FAIL"}

    </div>
    </>
  )
}