import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
function Login() {
    const history=useHistory();
    const [formFields, setformFields] = useState({
        email:"",
        pass:""
    })
    function getChange(e) {
        
        const fieldName=e.target.name;
        const fieldValue=e.target.value;
        setformFields({
            ...formFields,
            [fieldName]:fieldValue
        })
    }
    async function checkUserForLogin(){
        const response =await fetch("/user/login",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email:formFields.email,
                  pass:formFields.pass,
                }),
        })
        const data =response.json();
        console.log(response)
        if([404,500].includes(response.status) || typeof data === "undefined"){
            alert("invalid cradentials")
        }
        else{
            history.push("/")
        }
    }
    function submitData(e){
        e.preventDefault();
       checkUserForLogin();
    }
    return (
        <div classname="loginPage">
            <form action="">
                <input type="text" onChange={getChange} name="email" value={formFields.email}/>
                <input type="text" onChange={getChange} name="pass" value={formFields.pass}/>
                <button onClick={submitData} style={{width:"30px",height:"20px"}}>Login</button>
                </form>
        </div>
    )
}

export default Login
