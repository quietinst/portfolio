import { NavLink } from 'react-router';
import { animationIndex } from '../../utils/animationIndex';
import './Navbar.scss';

interface NavItem {
  to: string;
  label: string;
}

// To add a page to the menu: add an item here and a <Route> in App.tsx.
const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__list">
      {navItems.map(({ to, label }, index) => (
        <li key={to} className="navbar__item">
          {/* NavLink adds the "active" class to the link of the current page */}
          <NavLink
            to={to}
            end
            className="navbar__link"
            style={animationIndex(index + 1)}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
