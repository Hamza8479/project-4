import React,{useState} from 'react';
import {useHistory } from 'react-router-dom';
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
    const style ={
        display:"grid",
        // justifyContent:"center",
        // alignItems:"center",
        height:"81vh",
        width:"100vw",
        padding:"10px",
        // gridTemplateRows:"repeact(3,10px)",
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
        color:"white"
    }
    const btn ={
        background: "rgb(40, 176, 255)",
        color:"white",
        width:"100px",
        height:"35px",
        marginTop:"10px",
        borderRadius:"20px",
        fontSize:"17px",
    }
    return (
        <div style={style} classname="loginPage">
           <div> <h1 style={{color:"white"}}>Login</h1> </div>
            <form action="">
              <input style={inpt} type="text" onChange={getChange} name="email" value={formFields.email} placeholder='Email'/>  <br /> <br />
               <input style={inpt} type="text" onChange={getChange} name="pass" value={formFields.pass} placeholder='Password'/> <br /> 
                <button style={btn} onClick={submitData}> <b>Login</b> </button>
                </form>
        </div>
    )
}

export default Login
