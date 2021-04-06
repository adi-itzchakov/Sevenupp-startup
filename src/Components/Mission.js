import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Mission.css';

class SecondPart extends Component {
    render () {
        return (
            <div className="secondContainer">
                <h1 className="questionTitle">Why choose 7 days +</h1>
                <div className="txt-mission">
                    <div>
                        <Icon name="money bill alternate" size="huge" color="blue"/>
                        <p className="txt-examples">Encourages longer stays with better rates</p>
                    </div>
                    <div>
                        <Icon name="home" size="huge" color="blue"/>
                        <p className="txt-examples">Stronger and reliable business model</p>
                    </div>
                    <div>
                        <Icon name="group"size="huge" color="blue"/>
                        <p className="txt-examples">Not limited to the number of people</p>
                    </div>
                    <div>
                        <Icon name="calendar alternate outline" size="huge" color="blue"/>
                        <p className="txt-examples">A long vacation</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondPart;