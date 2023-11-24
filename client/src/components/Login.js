import React from "react";
import './mix.css'


const Login = ()=>{
    return(
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back</h1>
                        <p>Hi how are you</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Email</label>
                            <div className="two">
                                <input type="password" name="password" id="password" placeholder="Enter Your Password Address" />
                                <div className="showpass">
                                    Show
                                </div>
                            </div>
                        </div>
                        <button className="btn">Login</button>
                        <p>Don't Have Account? <a href="">Sign Up</a></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;