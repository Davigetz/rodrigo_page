import { NavLink, useLocation } from 'react-router-dom';
import logo from '../logo_id_factory.svg';
import { useAppContext } from '../contexto/colores';
import './nav-style.css';

export function Header() {
  const { color, loading, dispatch } = useAppContext();
  let location = useLocation();
  console.log(location);
  // const handleColor = async () => {
  //   console.log(color);
  //   console.log(loading);
  //   console.log(dispatch);
  //   dispatch({ type: 'coloInicial' });
  //   dispatch({ type: 'colorDia', color: 'F7996E' });
  //   console.log(color);
  // };
  return (
    <header className="mask">
      <nav className="container">
        {location.pathname === '/quienessomos' ? (
          <NavLink to="">Inicio</NavLink>
        ) : (
          <NavLink to="quienessomos">Quienes Somos</NavLink>
        )}
        {location.pathname === '/portafolio' ? (
          <NavLink to="">Inicio</NavLink>
        ) : (
          <NavLink to="portafolio">Portafolio</NavLink>
        )}
        {location.pathname === '/contacto' ? (
          <NavLink to="">Inicio</NavLink>
        ) : (
          <NavLink to="contacto">Contacto</NavLink>
        )}
        {/* <button
          onClick={handleColor}
          className={`whitespace-nowrap inline-flex items-center justify-center px-4 py-2 w-36 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700`}
        >
          tema {color}
        </button> */}
      </nav>
    </header>
  );
}
