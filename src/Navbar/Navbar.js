import './Navbar.css';

const Navbar = () => {
    return (
    <div className="Header">
        <img id="sevenImg" src="https://freight.cargo.site/t/original/i/abaecad9574bae0c3f53de99f75927252924f5c4f62aae83efdece51b547556c/1-01.png" />
          <div className="signHref">
            <a className="aSign" href="" >Sign Up </a>
            |
            <a className="aSign" href=""> Sign In </a>
        </div>
    </div>
    )
}

export default Navbar;