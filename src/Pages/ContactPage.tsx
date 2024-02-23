import { useNavigate } from 'react-router-dom';
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from '../diseno/ValidationError';
import './home-style.css';
import axios from 'axios';
import { useState } from 'react';

type Contact = {
  nombre: string;
  email: string;
  motivo: string;
  notas_adicionales: string;
};

export function ContactPage() {
  const [progress, setProgress] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const navigate = useNavigate();
  function onSubmit(contact: Contact) {
    const config = {
      onUploadProgress: function (progressEvent: any) {
        setProgress(progressEvent.loaded / progressEvent.total);
        console.log(progressEvent.loaded);
        console.log(progressEvent.total);
      },
    };
    console.log('Submitted details:', contact);
    axios.post('http://localhost:8080/contactos', contact, config).then((resp) => {
      navigate(`/gracias/${contact.nombre}`);
    });
  }

  const fieldStyle = 'flex flex-col mb-2';

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }
  console.log(progress);

  return (
    <div className="content contacto">
      <h2 className="text-3xl font-bold underline mb-3">Contactenos</h2>
      <p style={{ margin: '10px 50px', color: 'white' }}>
        Si coloca su informacion pronto nos pondremos en contacto con usted
      </p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            {...register('nombre', {
              required: 'Debe ingresar el nombre',
            })}
            className={getEditorStyle(errors.nombre)}
          />
          <ValidationError fieldError={errors.nombre} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Su email:</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Debe ingresar un email con un formato valido',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Por favor ingrese un formato valido de email',
              },
            })}
            className={getEditorStyle(errors.email)}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="motivo">Razón por la cual nos contacta</label>
          <select
            id="motivo"
            {...register('motivo', {
              required: 'favor ingrese la razon por lo cual desea contactornos',
            })}
            className={getEditorStyle(errors.motivo)}
          >
            <option value=""></option>
            <option value="soporte">Soporte</option>
            <option value="retroalimentacion">Retroalimentacion</option>
            <option value="cotizacion">Cotizacion</option>
            <option value="Otro">Otro</option>
          </select>
          <ValidationError fieldError={errors.motivo} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notas_adicionales">Notas Adicionales</label>
          <textarea
            id="notas_adicionales"
            {...register('notas_adicionales')}
            style={{ maxHeight: '250px', overflowY: 'visible', minHeight: '50px' }}
          />
        </div>
        <div>
          {progress > 0 ? (
            <>{progress}</>
          ) : (
            <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
