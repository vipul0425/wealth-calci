import logo from './product_images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className ="navbar navbar-light">
        <div className ="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo-img" src={logo} alt="logo" />
            </Link>
        </div>
      </nav>  
    )
}

export default Header;