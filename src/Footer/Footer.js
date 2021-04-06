import './Footer.css';
import { Icon } from 'semantic-ui-react';
import Numberseven from '../Pictures/7img.png';

const Footer = () => {
    return (
        <div>
            <h1 className="slogan">Pay Less. <br/> Stay Longer.</h1>
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