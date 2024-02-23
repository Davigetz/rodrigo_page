import logo from '../logo_id_factory.svg';
import './home-style.css';

export function HomePage() {
  return (
    <div className="banner">
      <div className="circulo" />
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}
