export default function Children({

    name,
    age,
    designation,
    salary:{inhand}

}

)

{
return(

    <>
    <div>
        <p>Employee Name : {name}</p>
        <p>Employee Age : {age}</p>
        <p>Employee Designation : {designation}</p>
        <p>Employee Inhand Salary : {inhand}</p>

    </div>

    </>
)}