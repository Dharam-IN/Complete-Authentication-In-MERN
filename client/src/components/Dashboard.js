import React from "react"

const Dashboard = ()=>{
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

