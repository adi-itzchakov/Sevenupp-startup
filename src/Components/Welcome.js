import React, { Component } from 'react';
import { Button ,Input } from 'semantic-ui-react';
import './Welcome.css';
import WelcomeImg from '../Pictures/welcomeImg.png'

class FirstPart extends Component {
    render() {
        return (
            <div className="firstContainer">
                <div className="welcome">
                    <img id="welcomeImg" src={WelcomeImg} />
                    <h1 className="headTitle">Pay less for <br/>seven & up</h1>
                    <div className="buttomContainer">
                        <h2 className="secondTitle">Extended stay, Minimum 7 nights</h2>
                        <div className="input-btn">
                            <form className="inputForm">
                            <Input className="txtInput" type="text" placeholder="Where"/>
                            <Input className="txtInput" type="text" placeholder="When"/>
                            </form>
                            <Button className="btn-go" color="blue">Go</Button>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default FirstPart;