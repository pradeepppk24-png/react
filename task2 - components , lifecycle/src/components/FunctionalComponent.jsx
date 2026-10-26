import { useState } from "react";
export default function FunctionalComponent(){
    const[count,setCount]=useState(0)
    return(
        <>

        <div>
            <div className="text-center text-primary font-arial h1 mt-5">SIMPLE CALCULATOR</div>
            <div className="text-center text-danger h4">Count : {count} </div>
        </div>
        <div className="text-center mt-3">
            <button onClick={()=>setCount(count+1)}>ADD</button>
            <button onClick={()=>setCount(count-1)}>SUB</button>
            <button onClick={()=>setCount(count*2)}>MUL</button>
            <button onClick={()=>setCount(count/2)}>DIV</button>

        </div>

        </>
    )
}