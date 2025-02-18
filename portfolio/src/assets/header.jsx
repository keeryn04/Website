import { Link } from "react-router";
import '../styles/navbar.css'

function Header() {
    return (
        <nav className="navbar">
          <ul>
            <li><Link to="/">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      );
}

export default Header