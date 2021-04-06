import React, { Component } from 'react';
import { Button ,Input } from 'semantic-ui-react';
import './Welcome.css';

class FirstPart extends Component {
    render() {
        return (
            <div className="firstContainer">
                <div className="welcome">
                <h1 className="headTitle">Pay Less for <br/>seven & up</h1>
                <h2 className="secondTitle">RELAX AND STAY A WHILE</h2>
                    <div className="input-btn">
                        <form className="inputForm">
                        <Input className="txtInput" type="text" placeholder="Where"/>
                        <Input className="txtInput" type="text" placeholder="When"/>
                        </form>
                        <Button className="btn-go" color="blue">Go</Button>
                    </div>
                </div>
        </div>
        )
    }
}

export default FirstPart;