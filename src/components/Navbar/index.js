import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () => (
  <header className="navbar">
    <Link to="/">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3025/3025921.png"
        alt="logo"
      />
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </ul>
  </header>
)

export default Navbar
