import { useState } from 'react'
import {Button} from './button'
import { Input } from './Input'
import { Output } from './Output'



export const Greet = () =>{
    
const [firstname , setFirstName] = useState("")
const [lastname , setLastName] = useState("")
const [middlename , setMiddleName] = useState("")
const [fullname, setFullName] = useState("")

const takeFirstName = (event) =>{
    setFirstName(event.target.value);
    console.log(event.target.value);
}

const takeMiddleName = (event) =>{
    setMiddleName(event.target.value);
    console.log(event.target.value);

}
const takeLastName = (event) =>{
    setLastName(event.target.value);
    console.log(event.target.value);

}

const initCap = (str)=>
             str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

// const showFullName = () =>{
//     const Name= initCap(firstname) + " " +initCap(middlename)+ " " + initCap(lastname);
//     console.log(Name);
//     setFullName(Name);
    
// }
const showfullName = ()=>{
    const concateName = initCap(firstname) +" "+initCap(middlename)+ " " +initCap(lastname);
    console.log('Full Name ', concateName);
    setFullName(concateName);
}

const Clearall = () =>{
    setFullName("");
}
    
    
    return (
    <>
    <div className='container'>
    <Output result="Hello To Greet App"/>
    <Input fn={takeFirstName} placeholder="Enter your first name"/>
    <br/>
    <Input fn={takeMiddleName} placeholder="Enter your middle name"/>
    <br/>
    <Input fn={takeLastName} placeholder="Enter your last name"/>
    </div>
    <Button onclick={showfullName} label= "Greet"/>
    <Button onclick={Clearall} label= "Clear All"></Button>
    <Output result={fullname}/>
    
     
    </>
    )
}