import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
