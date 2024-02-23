import { useParams } from 'react-router-dom';
export function GraciasPage() {
  const { nombre } = useParams<{ nombre: string }>();
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto" style={{ marginTop: '150px' }}>
      <div role="alert" className="bg-green-100 py-5 px-6 text-base text-          green-700 ">
        Gracias <b>{nombre}</b>, Pronto estaremos en contacto!
      </div>
    </div>
  );
}
