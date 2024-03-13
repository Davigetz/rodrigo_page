import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ErrorPage } from './Pages/ErrorPage';
import { HomePage } from './Pages/HomePage';
import { PortafolioPage } from './Pages/PortafolioPage';
import { EvidenciaPage } from './Pages/EvidenciaPage';
import { ContactPage } from './Pages/ContactPage';
import { GraciasPage } from './Pages/GraciasPage';
import { QuienesSomos } from './Pages/Quines';
import Quehacemos from './Pages/Quehacemos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'portafolio',
        element: <PortafolioPage />,
      },
      {
        path: 'portafolio/:id',
        element: <EvidenciaPage />,
      },
      {
        path: 'contacto',
        element: <ContactPage />,
      },
      {
        path: 'gracias/:nombre',
        element: <GraciasPage />,
      },
      {
        path: 'quienessomos',
        element: <QuienesSomos />,
      },
      {
        path: 'quehacemos',
        element: <Quehacemos />,
      },

      //   {
      //     path: 'portafolio/:id',
      //     element: <Portafolio />,
      //   },
      //   {
      //     path: 'admin',
      //     element: (
      //       <Suspense
      //         fallback={<div className="text-center p-5 text-xl text-slate-900">Loading...</div>}
      //       >
      //         <AdminPage />
      //       </Suspense>
      //     ),
      //   },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
