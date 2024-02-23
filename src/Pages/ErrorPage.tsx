import { Header } from '../diseno/Header';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  function isError(error: any): error is { statusText: string } {
    return 'statusText' in error;
  }
  return (
    <>
      <Header />
      <div className="text-center p-5 text-xl" style={{ marginTop: '200px' }}>
        <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
        {isError(error) && <p className="text-base text-slate-700">{error.statusText}</p>}
      </div>
    </>
  );
};
