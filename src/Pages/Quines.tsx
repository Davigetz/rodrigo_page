import './quienes.css';
import carlos from './images/Foto_Carlos_Correa.png';
import rodrigo from './images/Foto_Rodrigo1.png';
import { useEffect, useState } from 'react';
export const QuienesSomos = () => {
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth > 900) {
        setLargeScreen(true);
      } else {
        setLargeScreen(false);
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="container_quien">
      <div className="grid-item">
        <img alt="foto de Rodrigo Fernandez" src={rodrigo} className="protagonistas-img" />
        <div className="contenedor-texto-r">
          <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Rodrigo Fernandez Neira</h1>
          <div className="texto">
            <p>CONSULTORIA, GESTION, PROYECTACION, DISEÑO INTEGRAL Y DIRECCION ACADEMICA</p>
            <br />
            <p>
              Pionero del Diseño en Colombia, desde 1975 ha participado activamente en la creación y
              adecuación de los currículos de la enseñanza del Diseño, y de la organización y
              reconocimiento a la profesión.
            </p>
            <br />
            <p>Arquitecto de la Universidad Nacional de Colombia, Bogotá D.C., Colombia (1974)</p>
            <br />
            <p>
              Master en Diseño Industrial de la Scuola Politécnica di Design de Milán, Italia
              (1975).
            </p>
            <br />
            <p>
              Docente a nivel universitario desde 1975, Profesor en diseño de productos en la
              Facultad de Ingeniería de la Universidad de los Andes, Bogotá, Colombia (1976).
            </p>
            <br />
            <p>
              Profesor de la carrera de Diseño Gráfico de la Universidad Anáhuac del Sur en México
              (1983).
            </p>
            <br />
            <p>
              Cofundador y profesor de la Carrera de Diseño Industrial de la Universidad Nacional de
              Colombia Facultad de Artes (1975-1982).
            </p>
            <br />
            <p>
              Profesor de la Escuela de Diseño del Instituto Nacional de Bellas Artes de México
              (1983 a 2005). Y su director en el período 1997-2001.
            </p>
            <br />
            <p>
              Director de la Escuela de Diseño del Instituto Nacional de Bellas Artes de México de
              1997 a 2001.
            </p>
            <br />
            <p>
              Profesor invitado para cursos de grado (CPG) sobre imagen corporativa en UNITEC en
              Bogotá (2005 y 2006)
            </p>
            <br />
            <p>
              Jurado internacional invitado al concurso para docentes de la Facultad de
              Arquitectura, Diseño y Urbanismo de la Universidad de Buenos Aires, Argentina (2007).
            </p>
            <br />
            <p>
              Último Decano de la Facultad de Diseño Industrial de la Universidad de Bogotá Jorge
              Tadeo Lozano (2006-2019)
            </p>
            <br />
            <p>
              Director Fundador de la Institución Superior de Diseño para América Latina ISDAL, en
              Colombia (2010-2012).
            </p>
            <br />
            <p>
              Profesor de la Facultad de Diseño de la Universidad Católica de Colombia , (2013 a
              2023).
            </p>
            <br />
            <p>
              Como Experto en Diseño de la OEA realiza una misión en Paraguay (1977 y 78). Director
              de Proyectos del Centro de Innovación para la Exportación, de la Coordinadora de
              Fomento para el Comercio Exterior COFOCE del Estado de Guanajuato, México
              (octubre/diciembre de 2001).
            </p>
            <br />
            <p>Profesor invitado en la Universidad ISTHMUS, Panamá (2009 y 2012).</p>
          </div>
        </div>
      </div>
      <div className="grid-item">
        {!largeScreen && (
          <img src={carlos} alt="foto de Carlos Mario Correa" className="protagonistas-img" />
        )}
        <div className="contenedor-texto-c">
          <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Carlos Mario Correa Eastman</h1>

          <div className="texto">
            <p>Graduado en Artes Plásticas con especialización en Grafismo (Diseño Gráfico).</p>
            <br></br>
            <p>Institut Saint Luc Bruselas Bélgica año 1984.</p>
            <br></br>
            <em>Experiencia</em>
            <br></br>
            <p>
              En 1983 Gana el concurso de afiches para las Bibliotecas Públicas para la comunidad
              francesa de Lieja Bélgica.
            </p>
            <br></br>
            <p>
              En 1984 Participó en la muestra “17 Jeunes Graphistes “ (17 Jóvenes diseñadores) en la
              ciudad de Bruselas Bélgica.
            </p>
            <br></br>
            <p>
              En 1985 Regresa a Colombia y es invitado a la primera muestra de Diseño Industrial y
              Gráfico que se llevó a cabo en el museo de Arte Moderno de la ciudad de Medellín.
            </p>
            <br />
            <p>
              Ese mismo año realizó una exposición individual de afiches en la Universidad de
              Medellín.
            </p>
            <br />
            <p>
              En 1986 se vincula a la Universidad Jorge Tadeo Lozano como docente en la facultad de
              Diseño Gráfico. Facultad donde trabajó por espacio de catorce años.
            </p>
            <br />
            <p>
              En 1992 Abre su oficina de Diseño A.C. Diseño con proyectos para la empresa de
              teléfonos de Bogotá, el Centro de Comercio Internacional UNCTAD/GATT, el diseño de la
              imagen corporativa de múltiples empresas.
            </p>
            <br />
            <p>
              En el año de 1995 es contratado por Merck Colombia S.A. como consultor de diseño para
              el desarrollo de los pigmentos perlinos Iriodin en la industria gráfica.
            </p>
            <br />
            <p>
              Entre el Año 1997 y 1998 fue director creativo de la empresa{' '}
              <b> Proyecto Marketing</b>, empresa donde desarrolló la campaña del manejo de las
              basuras en el marco de la campaña de cultura ciudadana del alcalde Antanas Mockus.{' '}
            </p>
            <br />
            <p>
              En el año 2001 fue nombrado director del programa de Diseño Gráfico, Luego del
              programa Producción Gráfica Digital de LCI Bogotá, antes LaSalle College en el año
              2021 se retira de LCI y emprende su proyecto personal
            </p>
            <br />
            <p>
              En los años 2015 y 2017 fue invitado por el señor <b>François Caspar</b> director del
              concurso Posters for Tomorrow a participar como Jurado de esas ediciones
            </p>
          </div>
        </div>
        {largeScreen && (
          <img src={carlos} alt="foto de Carlos Mario Correa" className="protagonistas-img" />
        )}
      </div>
    </div>
  );
};
