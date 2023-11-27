import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './mix.css'


const Login = ()=>{

    const [passShow, setPassShow] = useState(false)
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const setVal = (e)=>{
        // console.log(e.target.value)
        const {name, value} = e.target

        setInpval(()=>{
            return{
                ...inpval,
                [name]: value
            }
        })
    }

    const loginuser =(e)=>{
        e.preventDefault();
        const {email, password} = inpval
        console.log(email, password)
    }

    return(
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Login</h1>
                        <p>Hi how are you</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} name="email" id="email" onChange={setVal} placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} name="password" id="password" onChange={setVal} placeholder="Enter Your Password Address" />
                                <div className="showpass" onClick={()=> setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className="btn" onClick={loginuser}>Login</button>
                        <p>Don't Have Account? <NavLink to="/register">Sign Up</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;