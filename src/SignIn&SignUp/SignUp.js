import React from 'react';
import {Button,TextField} from "@material-ui/core";
import './Sign.css';

const RegisterForm=() => {
    return (
        <div className="Sign-container">
            <h2>Sign Up</h2>
            <form className="textField">
            <TextField id="standard-basic" label="user name" />
            <TextField id="standard-basic" label="email" />
            <TextField id="standard-basic" label="password" />
            <TextField id="standard-basic" label="confirm password" />
            </form>
            <Button style={{marginTop:70}}>Submit</Button>
        </div>
    )
}

export default RegisterForm;