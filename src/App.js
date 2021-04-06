import React,{ Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Navbar/Navbar.js';
import FirstPart from './Components/Welcome.js';
import SecondPart from './Components/Mission.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar />
        <FirstPart />
        <SecondPart />
        <Footer />
      </div>
    );
  }
}

export default App;
