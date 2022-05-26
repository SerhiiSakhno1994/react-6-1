import { Outlet, NavLink } from 'react-router-dom';

import s from './Layout.module.css';

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Счетчик
        </NavLink>
        <NavLink to="/todos" className={setActive}>
          Закладки
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
