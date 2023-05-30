import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";
import SearchBar from "../Components/SearchBar";
import Search from "./Search";

function LoginForm(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        {value?<Search/>:
        <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
);
};

  

export default LoginForm;