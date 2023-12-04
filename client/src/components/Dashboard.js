import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";

const Dashboard = ()=>{

    const {logindata, setLoginData} = useContext(LoginContext);

    const history = useNavigate();

    let DashboardValid = async()=>{
        let token = localStorage.getItem("usersdatatoken")
        // console.log(token)

        const res = await fetch("http://localhost:8009/validuser",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if(data.status == 401 || !data){
            // console.log("Error page redirect")
            history("*");
        }else{
            // console.log("User verify")
            setLoginData(data);
            history("/dash");
        }
    }
    
    useEffect(()=>{
        DashboardValid();
    },[]);

    return(
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src="./user.png" style={{width: "200px", marginTop: 20}} alt="img" />
                <h1>User Email: <span style={{color: "blue"}}>{logindata ? logindata.ValidUserOne.email : ""}</span></h1>
            </div>
        </>
    )
};

export default Dashboard;

