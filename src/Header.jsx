
import './Header.css'; // Style your header separately
import subham from './assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png'
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={subham} alt="Alabay Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
