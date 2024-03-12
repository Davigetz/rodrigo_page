import { Outlet } from 'react-router-dom';
import { Header } from './diseno/Header';
import { PortafolioProvider } from './contexto/portafolio';
import useSize from './hooks/useSize';
import { useEffect } from 'react';
import HeaderMobile from './diseno/HeaderMobile';

function App() {
  const windowsize = useSize();
  console.log(windowsize);
  let header;
  if (windowsize[1] >= 530) header = <Header />;
  else if (windowsize[1] < 530) header = <HeaderMobile />;
  return (
    <>
      <PortafolioProvider>
        {header}
        <Outlet />
      </PortafolioProvider>
    </>
  );
}

export default App;
