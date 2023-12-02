import React, { useEffect } from "react"

const Dashboard = ()=>{

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
        console.log(data)
    }
    
    useEffect(()=>{
        DashboardValid();
    },[]);

    return(
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src="./user.png" style={{width: "200px", marginTop: 20}} alt="img" />
                <h1>User Email: <span style={{color: "blue"}}>dharam@gmail.com</span></h1>
            </div>
        </>
    )
};

export default Dashboard;

