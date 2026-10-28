import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => (
  <header className="header">
    <Logo />
    <Navbar />
  </header>
);

export default Header;
