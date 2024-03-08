import { Cloudinary } from '@cloudinary/url-gen';
import axios from 'axios';
import { CO, MX } from 'country-flag-icons/react/3x2';
import { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaTheaterMasks } from 'react-icons/fa';
import { IoLogoDesignernews } from 'react-icons/io';
import { IoFlagSharp } from 'react-icons/io5';
import { MdAdd, MdFoundation, MdSportsHandball } from 'react-icons/md';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useAppContext } from '../contexto/portafolio';
import FAB from '../diseno/FloatBtn/floatBtn';
import { Galery } from '../diseno/galery/galery';
import './home-style.css';

const uniqueArray = (objects: any, uniqueBy: any, keepFirst = true) => {
  return Array.from(
    objects
      .reduce((map: any, e: any) => {
        let key = uniqueBy
          .map((key: any) => [e[key], typeof e[key]])
          .flat()
          .join('-');
        if (keepFirst && map.has(key)) return map;
        return map.set(key, e);
      }, new Map())
      .values(),
  );
};

function findRepeat(arr: any[], key: string | number) {
  let arr2: any[] = [];
  arr.forEach((x: any) => {
    // mira si hay un objeto 2
    // que contenga la llave con el valor
    if (arr2.some((val) => val[key] === x[key])) {
      // Si hay entonces se incrementa en 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          k['cuenta']++;
        }
      });
    } else {
      // Si no hay nada que contenga la llave entonces vamos a crear
      // Un objeto para setear el valor inicial en 1
      let a: any = {};
      a[key] = x[key];
      a['cuenta'] = 1;
      arr2.push(a);
    }
  });
  return arr2;
}

export const PortafolioPage = () => {
  const [error, setError] = useState<number | null>(null);
  const { portafolio, loading, dispatch } = useAppContext();

  // Create a Cloudinary instance and set your cloud name.
  useEffect(() => {
    dispatch({ type: 'portafolioInicial' });
    console.log(loading);
    if (
      portafolio === undefined ||
      loading ||
      portafolio?.categorias === undefined ||
      portafolio?.galerias === undefined ||
      portafolio?.paises === undefined
    ) {
      makeRequest();
    }
    async function makeRequest() {
      console.log('before');

      // await delay(1000);
      axios
        .get('https://res.cloudinary.com/davigetz/image/list/branding.json')
        .then((res) => {
          if (res.status === 200) {
            let categorias = res.data.resources.map((item: any, index: any) => {
              return { value: item.context.custom.categoria };
            });

            categorias = categorias.filter((object: any) => {
              return object.value !== undefined;
            });

            let key = 'value';
            categorias = findRepeat(categorias, key);
            const counter = {};

            categorias.forEach(function (obj: any) {
              var key = JSON.stringify(obj.value);
              // @ts-ignore
              counter[key] = (counter[key] || 0) + 1;
            });

            let paises = res.data.resources.map((item: any, index: any) => {
              return { value: item.context.custom.pais, label: item.context.custom.pais };
            });

            paises = paises.filter((element: any) => {
              return element !== undefined;
            });
            paises = uniqueArray(paises, ['value'], true);
            dispatch({
              type: 'portafolioLlenando',
              categorias,
              paises,
              galerias: res.data.resources,
            });
          } else {
            setError(res.status);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log('after');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, dispatch]);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'davigetz',
    },
  });

  let resultado;
  if (portafolio?.galerias === undefined) {
    resultado = <div>Cargando...</div>;
  } else {
    let imagenes = portafolio.galerias?.map((item: any, index: number) => {
      // @ts-ignore
      const myImage = cld.image(item.public_id);
      myImage.quality('auto');
      let especualcion = 1300 / item.width;
      let width = item.width;
      let height = item.height;
      if (Math.round(especualcion) < 2) {
        width = width / 2;
        height = height / 2;
      }
      // Return the delivery URL
      const myUrl = myImage.toURL();
      // @ts-ignore
      return {
        imagen: <img src={myUrl} alt={item.public_id} height={height} width={width} />,
        height: height,
        witdh: width,
        caption: item.context.custom.caption,
        cliente: item.context.custom.cliente,
        designer: item.context.custom.designer,
        pais: item.context.custom.pais,
      };
    });

    resultado = (
      <>
        <Galery imagenes={imagenes} />
      </>
    );
  }

  let categoriasRender;
  if (portafolio?.categorias !== undefined && portafolio !== undefined) {
    let actions = [
      {
        label: 'Diseño y Publicidad',
        icon: <IoLogoDesignernews />,
        onClick: () => {
          dispatch({
            type: 'portafolioCambiandoCategoriasBandera',
            cate_selecionada: 'Diseño y Publicidad',
            bandera_seleccionada: null,
            portafolio,
          });
        },
        exteriorStyle: {
          right: '2em',
          bottom: '2em',
        },
        iconoExterior: <MdAdd style={{ backgroundColor: '#3d3d7e' }} />,
      },
      {
        label: 'Asociacion y Centros Culturales, Orquestas',
        icon: <FaTheaterMasks />,
        onClick: () => {
          dispatch({
            type: 'portafolioCambiandoCategoriasBandera',
            cate_selecionada: 'Asociacion y Centros Culturales, Orquestas',
            bandera_seleccionada: null,
            portafolio,
          });
        },
      },
      {
        label: 'Fundaciones y Organizaciones No gubernamentales',
        icon: <MdFoundation />,
        onClick: () => {
          dispatch({
            type: 'portafolioCambiandoCategoriasBandera',
            cate_selecionada: 'Fundaciones y Organizaciones No gubernamentales',
            bandera_seleccionada: null,
            portafolio,
          });
        },
      },
      {
        label: 'Articulos deportivos, Deportes',
        icon: <MdSportsHandball />,
        onClick: () => {
          dispatch({
            type: 'portafolioCambiandoCategoriasBandera',
            cate_selecionada: 'Articulos deportivos, Deportes',
            bandera_seleccionada: null,
            portafolio,
          });
        },
      },
      // falta colocar el boton de devolverse con las categorias
      {
        label: 'todos',
        icon: <RiArrowGoBackLine />,
        onClick: () => {
          dispatch({
            type: 'portafolioReiniciando',
            categorias: true,
            banderas: false,
          });
        },
      },
    ];
    categoriasRender = (
      <div>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {portafolio?.categorias !== null || portafolio?.categorias !== undefined ? (
            <>
              <FAB actions={actions} />
            </>
          ) : (
            <>No hay categorias definidas Error al hacer el Array</>
          )}
        </ul>
      </div>
    );
  }

  let paisesRender;
  if (portafolio?.paises !== null || portafolio?.paises !== undefined) {
    const actionPaises = [
      {
        label: 'Colombia',
        icon: <CO title="Colombia" className="..." />,
        onClick: () => {
          dispatch({
            type: 'portafolioCambiandoCategoriasBandera',
            cate_selecionada: null,
            bandera_seleccionada: 'Colombia',
            portafolio: portafolio!,
          });
        },
        exteriorStyle: {
          left: '2em',
          bottom: '2em',
        },
        iconoExterior: <IoFlagSharp />,
      },
      {
        label: 'Mexico',
        icon: <MX title="Mexico" className="..." />,
        onClick: () => {
          dispatch({
            type: 'portafolioCambiandoCategoriasBandera',
            cate_selecionada: null,
            bandera_seleccionada: 'Mexico',
            portafolio: portafolio!,
          });
        },
      },
      //falta colocar el boton de devolverse con los paises
      {
        label: 'todos',
        icon: <RiArrowGoBackLine />,
        onClick: () => {
          dispatch({
            type: 'portafolioReiniciando',
            categorias: false,
            banderas: true,
          });
        },
      },
    ];
    paisesRender = (
      <div>
        <ul>
          {portafolio?.paises !== null ? (
            <>
              <FAB actions={actionPaises} />
            </>
          ) : (
            <>No hay categorias definidas Error al hacer el Array</>
          )}
        </ul>
      </div>
    );
  }

  return (
    <div className="portafolio">
      {/* <Boton /> */}
      {error ? <div>Un Error a ocurrido de tipo{error}</div> : <>{resultado}</>}
      {categoriasRender}
      {paisesRender}
    </div>
  );
};
