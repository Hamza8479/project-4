import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
function Register() {
    const history=useHistory();
    const [formFields, setformFields] = useState({
        name:"",
        email:"",
        pass:"",
        cPass:""
    })
    function getChange(e) {
        const fieldName=e.target.name;
        const fieldValue=e.target.value;
        setformFields({
            ...formFields,
            [fieldName]:fieldValue
        })
    }
    async function getUserData() {
        const {name,email,pass,cPass}=formFields;
        const response =await fetch("/user/register",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
                email,
                pass,
                cPass
            })
        })
        const data=await response.json();
        console.log(data.message)
        if([404,500,400].includes(response.status) || typeof data === "undefined"){
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
            history.push("/")
        }
    }
    function submitBtn(e) {
        e.preventDefault();
        getUserData();
    }
    const style ={
        display:"grid",
        justifyContent: "center",
        alignItems: "center",
        height:"81vh",
        width:"100vw",
        padding:"10px",
        gridGap:"20px", 
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
        <div style={style} className="registerPage">
            <form action="">
            <div> <h1 style={{color:"white"}}>Registration</h1> </div>
                <input style={inpt} type="text" name="name" onChange={getChange} value={formFields.name} placeholder='Enter Name' /> <br />
                <input style={inpt} type="text" name="email" onChange={getChange} value={formFields.email} placeholder='Enter Email'/> <br />
                <input style={inpt} type="text" name="pass" onChange={getChange} value={formFields.pass} placeholder='Enter Password'/> <br />
                <input style={inpt} type="text" name="cPass" onChange={getChange} value={formFields.cPass} placeholder='Confirm Password'/> <br />
                <button style={btn} onClick={submitBtn}> <b>  Register </b></button>
                <button style={btn} onClick={()=> history.push("/")}> <b>Login</b> </button>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Register
