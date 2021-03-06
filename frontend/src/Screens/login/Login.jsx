import React,{useState} from 'react';
import {useHistory } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
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
        const data = await response.json();
        if([404,500].includes(response.status) || typeof data === "undefined"){
            toast.error(`${data.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
        else{
            history.push("/products")
        }
    }
    function submitData(e){
        e.preventDefault();
       checkUserForLogin();
    }
    const style ={
        display:"grid",
        justifyContent: "center",
        alignItems: "center",
        height:"81vh",
        width:"100vw",
        padding:"10px",
        gridGap:"0px", 
    backgroundImage: "url(https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    };
    const inpt ={
        height:"35px",
        width:"400px",
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        textAlign: "center",
        borderRadius:"10px",
        // background: "transparent",
        fontSize:"20px",
        marginTop:"20px"
    }
    const btn ={
        background: "rgb(40, 176, 255)",
        color:"white",
        width:"100px",
        height:"35px",
        marginTop:"10px",
        borderRadius:"20px",
        fontSize:"17px",
        cursor:"pointer"
    }
    return (
        <div style={style} classname="loginPage">
            <form action="">
            <div> <h1 style={{color:"white"}}>Login</h1> </div>
              <input style={inpt} type="text" onChange={getChange} name="email" value={formFields.email} placeholder='Email'/>  <br /> 
               <input style={inpt} type="text" onChange={getChange} name="pass" value={formFields.pass} placeholder='Password'/> <br /> 
                <button style={btn} onClick={submitData}> <b>Login</b> </button>
                <button style={btn} onClick={()=> history.push("/register")}> <b>Register</b> </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
