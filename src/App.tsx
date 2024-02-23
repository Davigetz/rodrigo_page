import { Outlet } from 'react-router-dom';
import { Header } from './diseno/Header';
import { PortafolioProvider } from './contexto/portafolio';

function App() {
  return (
    <>
      <PortafolioProvider>
        <Header />
        <Outlet />
      </PortafolioProvider>
    </>
  );
}

export default App;
