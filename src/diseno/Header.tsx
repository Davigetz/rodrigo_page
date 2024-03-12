import { NavLink, useLocation } from 'react-router-dom';
import logo from '../logo_id_factory.svg';
import './nav-style.css';
import rutas from '../utils/routes.json';

export function Header() {
  let location = useLocation();

  return (
    <header className="mask">
      <nav className="container">
        {rutas.map((item, index) => (
          <>
            {location.pathname === `/${item.href}` ? (
              <NavLink to="">Inicio</NavLink>
            ) : (
              <NavLink to={`${item.href}`}>{item.title}</NavLink>
            )}
          </>
        ))}
      </nav>
    </header>
  );
}
