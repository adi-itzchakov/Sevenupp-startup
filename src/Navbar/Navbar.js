import React, { useState } from 'react';
import './Navbar.css';
import PopUp from '../Popup/Popup.js';
import LoginPage from '../SignIn&SignUp/SignIn.js';
import RegisterPage from '../SignIn&SignUp/SignUp';

const Navbar = () => {
    const [RegisterPopup, setRegisterPopup]=useState(false);
    const [LoginPopup, setLoginPopup]=useState(false);

    return (
    <div className="Header">
        <img id="sevenImg" src="https://freight.cargo.site/t/original/i/abaecad9574bae0c3f53de99f75927252924f5c4f62aae83efdece51b547556c/1-01.png" />
          <div className="signHref">
            <a className="aSign" onClick={()=>setRegisterPopup(true)}>Sign Up </a>
            <PopUp trigger={RegisterPopup} setTrigger={setRegisterPopup}>
                <RegisterPage/>
            </PopUp>
            |
            <a className="aSign" onClick={()=>setLoginPopup(true)}> Sign In </a>
            <PopUp trigger={LoginPopup} setTrigger={setLoginPopup}>
                <LoginPage/>
            </PopUp>
        </div>
    </div>
    )
}

export default Navbar;