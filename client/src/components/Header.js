import React from 'react'
import './header.css'
import Avatar from '@mui/material/Avatar';

const Header = ()=>{
    return(
        <>
            <header>
                <nav>
                    <h1>Upflairs</h1>
                    <Avatar style={{backgroundColor: "blue"}}>H</Avatar>
                </nav>
            </header>
        </>
    )
}

export default Header;
