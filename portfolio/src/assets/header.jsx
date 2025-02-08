import { Link } from "react-router";
import '../styles/navbar.css'

function Header() {
    return (
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
      );
}

export default Header