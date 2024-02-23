import { portafolio } from '../data/portafolio';
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

export function EvidenciaPage() {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : params.id;
  const evi = portafolio.find((evi) => evi.id === id);
  return (
    <div className="text-center p-5 text-xl">
      {evi === undefined ? (
        <h1 className="text-xl text-slate-900">Unknown product</h1>
      ) : (
        <>
          <h1 className="text-xl text-slate-900">{evi.empresa}</h1>
        </>
      )}
    </div>
  );
}
