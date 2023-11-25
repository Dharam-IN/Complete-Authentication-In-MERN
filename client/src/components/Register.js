import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './mix.css'

const Register = ()=>{
    const [passShow, setPassShow] = useState(false)
    const [cpassShow, csetPassShow] = useState(false)

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const setInpval =(e)=>{
        console.log(e.target.value)
    }

    return(
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p>Please fill this empty fields</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Name</label>
                            <input type="name" onChange={setInpval} name="name" id="name" placeholder="Enter Your Name" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setInpval} name="email" id="email" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setInpval} name="password" id="password" placeholder="Enter Your Password" />
                                <div className="showpass" onClick={()=> setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} onChange={setInpval} name="cpassword" id="cpassword" placeholder="Confirm Password" />
                                <div className="showpass" onClick={()=> csetPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className="btn">Sign Up</button>
                        <p>Already Have an Account? <NavLink to="/login">Login</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register;
