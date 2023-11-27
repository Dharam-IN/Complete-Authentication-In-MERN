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

    console.log(inpval)

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

    const addUserdata = (e)=>{
        e.preventDefault();
        const {fname, email, password, cpassword} = inpval;
        
        if(fname === ""){
            alert("Please enter Name")
        }else if(email === ""){
            alert("Please enter Email")
        }else if(password === ""){
            alert("Please enter Password")
        }else if(password.length < 6){
            alert("Atleast password length is 6 Character")
        }else if(cpassword === ""){
            alert("Please enter Confirm Password")
        }else if(cpassword.length < 6){
            alert("Atleast password length is 6 Character")
        }
        else if(password !== cpassword){
            alert("Password and Confirm password are not match")
        }
        else{
            console.log("User Registered Successfully")
        }
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
                            <input type="name" onChange={setVal} value={inpval.fname} name="fname" id="name" placeholder="Enter Your Name" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder="Enter Your Password" />
                                <div className="showpass" onClick={()=> setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} onChange={setVal} value={inpval.cpassword} name="cpassword" id="cpassword" placeholder="Confirm Password" />
                                <div className="showpass" onClick={()=> csetPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className="btn" onClick={addUserdata}>Sign Up</button>
                        <p>Already Have an Account? <NavLink to="/">Login</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register;
