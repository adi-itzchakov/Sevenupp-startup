import React from 'react';
import {Button, TextField} from "@material-ui/core";
import './Sign.css';

const LoginForm=() => {
    return (
        <div className="Sign-container">
            <h2>Sign In</h2>
            <form className="textField">
            <TextField id="standard-basic" label="user name" />
            <TextField id="standard-basic" label="password" />
            </form>
            <Button style={{marginTop:160}}>Submit</Button>
        </div>
    )
}

export default LoginForm;