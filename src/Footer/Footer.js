import './Footer.css';
import { Icon } from 'semantic-ui-react';
import Numberseven from '../Pictures/7img.png';

const Footer = () => {
    return (
        <div>
            <div className="containerAbout">
                <h1 className="slogan">
                    <p>RELAX </p>
                    <p> AND STAY A WHILE.</p>
                </h1>
                <div className="informationAbout">
                    <div className="section1">
                        <h3 className="titlesAbout">COMPANY</h3>
                        <a href="" className="hrefAbout">About us</a>
                        <a href="" className="hrefAbout">Get in touch</a>
                    </div>
                    <div>
                        <h3 className="titlesAbout">MORE</h3>
                        <a href="" className="hrefAbout">Hotels</a>
                        <a href="" className="hrefAbout">Cities</a>  
                    </div> 
                </div>    
            </div>
            <div className="footerContainer">
                <img id="numSeven" src={Numberseven} />
                <div className="Copyright">
                    <Icon name="copyright outline" />
                    <p>2021 SevenUpp. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;