import React, { Component } from 'react';
import './DownloadApp.css';
import { Button } from 'semantic-ui-react';
import ImgApp1 from '../Pictures/app1.png';
import ImgApp2 from '../Pictures/app2.png';

class DownloadApp extends Component{
    render(){
        return(
            <div className="container-thirdPart">
                <div>
                    <h4 className="titleApp">Get the App</h4>
                    <p className="Get-The-App">Want more information? More access to our hotels and cities? To order your vacation-get the app.</p>
                    <Button className="btn-get-the-app" color="blue">Get the App</Button>
                </div>
                <img className="ImgApp" src={ImgApp1}/>
                <img className="ImgApp" src={ImgApp2}/>
            </div>
        )
    }
}

export default DownloadApp;